import { PrismaClient } from "../../generated/prisma"; 

import {Request, Response, NextFunction} from 'express';
import {AppError} from '../errors/custom.error';
import { tickets } from '../../prisma/seeds/tickets';
import { notifications } from '../../prisma/seeds/notifications';

export class UserController{
    prisma = new PrismaClient();

    //method to get all users
    get = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const users = await this.prisma.user.findMany({
                include: {
                    tickets: true,
                    userTechnician: true,
                    ticketHistory: true,
                    notifications: true
                }
            });
            res.json(users);
        }catch(error){
            next(error);
        }
    };
}