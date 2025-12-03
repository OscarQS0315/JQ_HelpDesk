import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/custom.error";
import { E_NotificationType, PrismaClient } from "../../generated/prisma";

export class NotificationController {

    prisma = new PrismaClient();

    getUserNotifications = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = parseInt(req.params.id);
            if (isNaN(userId)) {
                next(AppError.badRequest("El ID no es válido"));
            }
            const notifications = await this.prisma.notification.findMany({
                where: { toUserId: userId },
                orderBy: { createdAt: 'desc' },
                include: {
                    fromUser: {
                        omit: {
                            password: true,
                        }
                    },
                    toUser: {
                        omit: {
                            password: true,
                        }
                    },
                    ticket: {
                        include: {
                            ticketHistory: true,
                        }
                    }
                }
            });
            res.status(200).json({ notifications });
        } catch (error) {
            next(error);
        }
    };


    markAsRead = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const notificationId = parseInt(req.params.id);
            if (isNaN(notificationId)) {
                return next(AppError.badRequest("El ID no es válido"));
            }
            const notificationUpdated = await this.prisma.notification.update({
                where: { id: notificationId },
                data: { isRead: true },
                include: {
                    fromUser: {
                        omit: {
                            password: true,
                        }
                    },
                    toUser: {
                        omit: {
                            password: true,
                        }
                    },
                    ticket: {
                        include: {
                            ticketHistory: true,
                        }
                    }
                }
            });
            res.status(200).json({ notificationUpdated });
        } catch (error) {
            return next(error);
        }
    };

    markAllAsRead = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = parseInt(req.params.userId);
            if (isNaN(userId)) {
                next(AppError.badRequest("El ID no es válido"));
            }
            await this.prisma.notification.updateMany({
                where: { toUserId: userId },
                data: { isRead: true },
            });
            res.status(200).json({ message: "Todas las notificaciones marcadas como leídas" });
        } catch (error) {
            next(error);
        }
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            let newNotification;
            if (body.NotificationType === E_NotificationType.TICKET_UPDATE) {
                newNotification = await this.prisma.notification.create({
                    data: {
                        title: body.title,
                        toUserId: body.toUserId,
                        fromUserId: body.fromUserId,
                        ticketId: body.ticketId,
                        message: body.message,
                        isRead: false,
                        type: E_NotificationType.TICKET_UPDATE,
                    },
                });

            } else {
                newNotification = await this.prisma.notification.create({
                    data: {
                        title: "Nuevo Inicio de sesión",
                        toUserId: body.toUserId,
                        message: "Nuevo Inicio de sesión detectado en tu cuenta.",
                        isRead: false,
                        type: E_NotificationType.LOGIN,
                    },
                });
            }
            res.status(201).json({ notification: newNotification });

        } catch (error) {
            next(error);
        }
    };

}