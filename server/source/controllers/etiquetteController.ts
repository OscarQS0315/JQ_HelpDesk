import { PrismaClient } from "../../generated/prisma";

import { Request, Response, NextFunction, response } from 'express';
import { AppError } from '../errors/custom.error';


export class EtiquetteController {
    prisma = new PrismaClient();

    //method to get all specialities
    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const etiquettes = await this.prisma.categoryEtiquette.findMany({
            });
            res.json(etiquettes);
        } catch (error) {
            next(error);
        }
    };

    //method to get user by id
    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {

            let etiquetteId = parseInt(req.params.id);
            if (isNaN(etiquetteId)) {
                next(AppError.badRequest("El ID no es válido"));
            }
            const etiquette = await this.prisma.categoryEtiquette.findFirst({
                where: {
                    id: etiquetteId
                }
            });

            if (etiquette) {
                res.status(200).json(etiquette);
            } else {
                next(AppError.notFound("Etiqueta no encontrada"));
            }

        } catch (error) {
            next(error);
        }
    };
}