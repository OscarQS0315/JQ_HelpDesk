import { PrismaClient } from "../../generated/prisma";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/custom.error";
import { E_Role } from "../../generated/prisma";


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
        const body = req.body;

        
    }
}