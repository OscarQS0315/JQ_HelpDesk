import { PrismaClient } from "../../generated/prisma";

import { Request, Response, NextFunction, response } from 'express';
import { AppError } from '../errors/custom.error';
import { tickets } from '../../prisma/seeds/tickets';
import { notifications } from '../../prisma/seeds/notifications';

export class UserController {
    prisma = new PrismaClient();

    //method to get all users
    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await this.prisma.user.findMany({
                include: {
                    tickets: true,
                    userTechnician: true,
                    ticketHistory: true,
                    notifications: true
                }
            });
            res.json(users);
        } catch (error) {
            next(error);
        }
    };

    //method to get user by id
    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {

            let userId = parseInt(req.params.id);
            if (isNaN(userId)) {
                next(AppError.badRequest("El ID no es válido"));
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
            if (user) {
                res.status(200).json(user);
            } else {
                next(AppError.notFound("Usuario no encontrado"));
            }

        } catch (error) {
            next(error);
        }
    };
}