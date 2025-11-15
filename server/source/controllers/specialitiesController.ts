import { PrismaClient } from "../../generated/prisma";

import { Request, Response, NextFunction, response } from 'express';
import { AppError } from '../errors/custom.error';


export class SpecialitiesController {
    prisma = new PrismaClient();

    //method to get all specialities
    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const specialities = await this.prisma.specialityArea.findMany({
            });
            res.json(specialities);
        } catch (error) {
            next(error);
        }
    };

    //method to get user by id
    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {

            let specialityId = parseInt(req.params.id);
            if (isNaN(specialityId)) {
                next(AppError.badRequest("El ID no es válido"));
            }
            const speciality = await this.prisma.specialityArea.findFirst({
                where: {
                    id: specialityId
                }
            });

            if (speciality) {
                res.status(200).json(speciality);
            } else {
                next(AppError.notFound("Especialidad no encontrada"));
            }

        } catch (error) {
            next(error);
        }
    };
}