import { NextFunction } from "express";
import { PrismaClient } from "../../generated/prisma";
import { AppError } from "../errors/custom.error";
import { Request, Response } from "express";

export class TicketCategoryController {
    prisma = new PrismaClient();

    //method to get all ticket categories
    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categories = await this.prisma.ticketCategory.findMany({
                include: {
                    SLA: true,
                    specialities: true,
                    categoryEtiquettes: true
                }
            });
            res.json(categories);
        } catch (error) {
            next(error);
        }
    };

    //method to get ticket category by id
    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let categoryId = parseInt(req.params.id);
            if (isNaN(categoryId)) {
                next(AppError.badRequest("El ID no es válido"));
            }
            const category = await this.prisma.ticketCategory.findFirst({
                where: {
                    id: categoryId
                },
                include: {
                    SLA: true,
                    specialities: true,
                    categoryEtiquettes: true
                }
            });
            if (!category) {
                return next(AppError.notFound("Categoría no encontrada"));
            }
            res.json(category);
        } catch (error) {
            next(error);
        }
    };
}