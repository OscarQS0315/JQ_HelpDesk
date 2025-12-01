import { E_TicketPriority, E_TicketStatus, PrismaClient } from "../../generated/prisma";
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
        console.log (body.ticketPriority, vTicketPriority, typeof(vTicketPriority));
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
                        connect: {id: body.userId}
                    },
                    ticketCategory: {
                        connect: {id: body.ticketCategoryId}
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

    }

    updateState = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const ticketId = parseInt(req.params.id);
            const body = req.body;
            
        } catch (error) {
            console.error("Error creando tiquete:", error);
            next(error);
        }
    }
    
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
