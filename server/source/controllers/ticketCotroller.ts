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
                    technician: true,
                    ticketHistory: {
                        include: {
                            TicketObservation: true
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
                    technician: true,
                    ticketHistory: {
                        include: {
                            TicketObservation: true
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
            let param = req.params.role;
            param = param.toUpperCase();
            if (!Object.values(E_Role).includes(param as E_Role)) {
                return next(AppError.badRequest('El role proporcionado no es válido'));
            }

            let userRole = param as E_Role;
            if (!userRole) {
                return next(AppError.badRequest('Parametro role es requerido'));
            }
            const tickets = await this.prisma.ticket.findMany({
                where: {
                    user: {
                        role: userRole
                    }
                },
                include: {
                    user: true,
                    technician: true,
                    ticketHistory: {
                        include: {
                            TicketObservation: true
                        },
                    },
                    ticketCategory: true,
                    ticketValoration: true
                }
            });
            res.status(200).json(tickets);
        }
        catch (error) {
            next(error);
        }
    };
}