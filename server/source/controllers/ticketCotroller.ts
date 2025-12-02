import { E_TechnicianStatus, E_TicketPriority, E_TicketStatus, PrismaClient, SpecialityArea } from "../../generated/prisma";
import { Request, Response, NextFunction, response } from "express";
import { AppError } from "../errors/custom.error";
import { E_Role } from "../../generated/prisma";
import { title } from "process";
import { connect } from "http2";


export class TicketController {
    prisma = new PrismaClient();

    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const tickets = await this.prisma.ticket.findMany({
                include: {
                    user: true,
                    technician: {
                        include: {
                            user: true,
                        },
                    },
                    ticketHistory: {
                        include: {
                            ticketImages: true,
                            user: true,
                        },
                    },
                    ticketCategory: true,
                    ticketValoration: true,
                }
            });
            res.status(200).json(tickets);
        } catch (error) {
            next(error);
        }
    };

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let ticketId = parseInt(req.params.id);
            if (isNaN(ticketId)) {
                next(AppError.badRequest('El ID no es válido'));
            }
            const ticket = await this.prisma.ticket.findFirst({
                where: { id: ticketId },
                include: {
                    user: true,
                    technician: {
                        include: {
                            user: true,
                        },
                    },
                    ticketHistory: {
                        include: {
                            ticketImages: true,
                            user: true,
                        },
                    },
                    ticketCategory: true,
                    ticketValoration: true
                }
            });
            if (!ticket) {
                return next(AppError.notFound('No existe el ticket'));
            }
            res.status(200).json(ticket);
        } catch (error) {
            next(error);
        }
    };

    getByRole = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let tickets = null;
            let param = req.params.userId;


            if (!param) {
                return next(AppError.badRequest('El ID de usuario es requerido'));
            }
            const userId = parseInt(param);
            if (isNaN(userId)) {
                return next(AppError.badRequest('El ID de usuario no es válido'));
            }
            const user = await this.prisma.user.findFirst({
                where: {
                    id: userId
                },
                include: {
                    tickets: true,
                    userTechnician: true,
                    ticketHistory: true,
                    notifications: true
                }
            });
            if (!user) {
                next(AppError.notFound("Usuario no encontrado"));
            }
            const userRole = user?.role as E_Role;
            if (userRole === E_Role.ADMIN) {
                tickets = await this.prisma.ticket.findMany({
                    include: {
                        user: true,
                        technician: {
                            include: {
                                user: true,
                            },
                        },
                        ticketHistory: {
                            include: {
                                ticketImages: true,
                            },
                        },
                        ticketCategory: true,
                        ticketValoration: true,
                    }
                });
            } else if (userRole === E_Role.TECHNICIAN) {
                tickets = await this.prisma.ticket.findMany({
                    where: {
                        technician: {
                            userId: userId
                        }
                    },
                    include: {
                        user: true,
                        technician: {
                            include: {
                                user: true,
                            },
                        },
                        ticketHistory: {
                            include: {
                                ticketImages: true,
                            },
                        },
                        ticketCategory: true,
                        ticketValoration: true
                    }
                });
            } else {
                tickets = await this.prisma.ticket.findMany({
                    where: {
                        user: {
                            id: userId
                        }
                    },
                    include: {
                        user: true,
                        technician: {
                            include: {
                                user: true,
                            },
                        },
                        ticketHistory: {
                            include: {
                                ticketImages: true,
                            },
                        },
                        ticketCategory: true,
                        ticketValoration: true
                    }
                });
            }

            res.status(200).json(tickets);
        }
        catch (error) {
            next(error);
        }
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            const vTicketPriority = body.priority as E_TicketPriority;
            const category = await this.prisma.ticketCategory.findUnique({
                where: { id: body.ticketCategoryId },
                include: { SLA: true }
            });

            if (!category || !category.SLA) {
                return res.status(400).json({ message: "La categoría no tiene SLA asociado." });
            }

            const now = new Date();

            const vReplySLA = new Date(now.getTime() + Number(category.SLA.slaReplyHours) * 3600000);


            const vResolutionSLA = new Date(now.getTime() + Number(category.SLA.slaResolutionHours * 3600000));

            const historyPoints = calculateHistoryPoints(vTicketPriority);
            console.log(body.ticketPriority, vTicketPriority, typeof (vTicketPriority));
            const newTicket = await this.prisma.ticket.create({
                data: {
                    title: body.title,
                    description: body.description,
                    priority: vTicketPriority,
                    storyPoints: historyPoints,
                    aceptanceCriteria: body.aceptanceCriteria,
                    comments: body.comments,
                    slaReply: vReplySLA,
                    slaResolution: vResolutionSLA,
                    user: {
                        connect: { id: body.userId }
                    },
                    ticketCategory: {
                        connect: { id: body.ticketCategoryId }
                    },
                    ticketHistory: {
                        create: {
                            status: E_TicketStatus.PENDING,
                            changedBy: body.userId,
                            observation: "Ticket creado por el usuario.",
                            ticketImages: {
                                create: body.ticketImages.map((img: { url: string }) => ({
                                    imageUrl: img.url
                                }))
                            }
                        }
                    }

                }
            });
            res.status(200).json(newTicket);
        } catch (error) {
            console.error("Error creando tiquete:", error);
            next(error);
        }

    };

    manualAssignTechnician = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Manual asignando técnico...");
            console.log("Usuario que realiza la acción:", (req.user as any).id);

            const ticketId = parseInt(req.params.id);
            const technicianId = parseInt(req.body.technicianId);

            if (isNaN(ticketId) || isNaN(technicianId)) {
                return next(AppError.badRequest('El ID del ticket o del técnico no es válido'));
            }
            const technician = await this.prisma.userTechnician.findUnique({
                where: { id: technicianId },
                include: { user: true }
            });
            const updatedTicket = await this.prisma.ticket.update({
                where: { id: ticketId },
                data: {
                    technicianId: technicianId,
                    status: E_TicketStatus.ASSIGNED,
                    ticketHistory: {
                        create: {
                            status: E_TicketStatus.ASSIGNED,
                            changedBy: (req.user as any).id,
                            observation: `Técnico ${technician?.user.name} ${technician?.user.lastName} asignado manualmente por ${(req.user as any).name} ${(req.user as any).lastName}.`,
                        }
                    }
                },
                include: {

                    technician: {
                        include: {
                            user: true
                        }
                    },
                    ticketHistory: true,
                    ticketCategory: true
                }
            });

            res.status(200).json({
                updatedTicket,
                assignedTechnician: updatedTicket.technician
            });

        } catch (error) {
            console.error("Error asignando tiquete:", error);
            next(error);
        }
    };

    autoAssignTechnician = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Auto asignando técnico...");
            console.log("Usuario que realiza la acción:", (req.user as any).id);
            const ticketId = parseInt(req.params.id);
            if (isNaN(ticketId)) {
                return next(AppError.badRequest('El ID del ticket no es válido'));
            }
            const ticket = await this.prisma.ticket.findFirst({
                where: { id: ticketId },
                include: {
                    user: true,
                    technician: {
                        include: {
                            user: true,
                        },
                    },
                    ticketHistory: {
                        include: {
                            ticketImages: true,
                            user: true,
                        },
                    },
                    ticketCategory: {
                        include: {
                            specialities: true
                        }
                    }
                }
            });
            if (!ticket) {
                return next(AppError.notFound('No existe el ticket'));
            }
            const ticketSpecialtyIds = ticket.ticketCategory.specialities.map(s => s.id);

            const technicians = await this.prisma.userTechnician.findMany({
                include: {
                    user: {
                        omit: {
                            password: true
                        }
                    },
                    tickets: true,
                    specialities: true
                }
            });
            const availableTechnicians = technicians.filter(t => t.status === E_TechnicianStatus.AVAILABLE);
            const bussyTechnicians = technicians.filter(t => t.status === E_TechnicianStatus.BUSY);

            const availableTechniciansMatching = availableTechnicians.filter(t =>
                t.specialities.some(s => ticketSpecialtyIds.includes(s.id))
            );
            const bussyTechniciansMatching = bussyTechnicians.filter(t =>
                t.specialities.some(s => ticketSpecialtyIds.includes(s.id))
            );
            let firstMatchingSpeciality: SpecialityArea | null = null;
            if (availableTechniciansMatching.length > 0) {
                for (const t of availableTechniciansMatching) {
                    const match = t.specialities.find(s => ticketSpecialtyIds.includes(s.id));
                    if (match) {
                        firstMatchingSpeciality = match;
                        break;
                    }
                }
            } else if (bussyTechniciansMatching.length > 0) {
                for (const t of bussyTechniciansMatching) {
                    const match = t.specialities.find(s => ticketSpecialtyIds.includes(s.id));
                    if (match) {
                        firstMatchingSpeciality = match;
                        break;
                    }
                }
            }


            let assignedTechnician = null;

            let puntaje = 0;
            const now = Date.now();
            const slaDate = ticket.slaResolution?.getTime() ? new Date(ticket.slaResolution).getTime() : null;
            let timeRemainingMs = 0;
            if (slaDate) {
                timeRemainingMs = slaDate - now;
            }
            if (ticket.storyPoints) {
                puntaje = (ticket.storyPoints * 1000) - timeRemainingMs;
            }
            console.log("Puntaje del ticket:", puntaje);

            if (availableTechniciansMatching.length > 0) {
                const technicianAvailableWithMinWorkload = availableTechniciansMatching.reduce((min, t) =>
                    t.workload < min.workload ? t : min
                );
                assignedTechnician = technicianAvailableWithMinWorkload;
            } else if (bussyTechniciansMatching.length > 0) {
                const technicianBussyWithMinWorkload = bussyTechniciansMatching.reduce((min, t) =>
                    t.workload < min.workload ? t : min
                );
                assignedTechnician = technicianBussyWithMinWorkload;
            } else {
                return next(AppError.notFound('No hay técnicos con las especialidades requeridas disponibles'));
            }

            const createdRule = await this.prisma.autoTriageRule.create({
                data: {
                    timeRemainingSLA: timeRemainingMs,
                    ticketPriority: ticket.priority as E_TicketPriority,
                    technicianSpecialityId: firstMatchingSpeciality?.id,
                }
            });
            const updatedTicket = await this.prisma.ticket.update({
                where: { id: ticket.id },
                data: {
                    technicianId: assignedTechnician.id,
                    status: E_TicketStatus.ASSIGNED,
                    automaticTriageRuleId: createdRule.id,
                    ticketHistory: {
                        create: {
                            status: E_TicketStatus.ASSIGNED,
                            changedBy: (req.user as any).id,
                            observation: `Técnico ${assignedTechnician.user.name} ${assignedTechnician.user.lastName}  asignado automáticamente.`,
                        }
                    },

                },
            });
            res.status(200).json({ updatedTicket, puntaje, createdRule, assignedTechnician });
        } catch (error) {
            console.error("Error creando tiquete:", error);
            next(error);
        }
    };

}
function calculateHistoryPoints(priority: E_TicketPriority): number {
    switch (priority) {
        case E_TicketPriority.LOW:
            return 1;
        case E_TicketPriority.MEDIUM:
            return 3;
        case E_TicketPriority.HIGH:
            return 5;
        default:
            return 0;
    }
}
