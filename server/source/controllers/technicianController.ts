import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/custom.error";
import { PrismaClient } from "../../generated/prisma";

export class TechnicianController{
    prisma = new PrismaClient();

    //method to get all technicians
    get = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const technicians = await this.prisma.userTechnician.findMany({
                include: {
                    user: true,
                    tickets: true,
                    specialities: true
                }
            });
            res.json(technicians);
        }catch(error){
            next(error);
        }
    };

    //method to get technician by id
    getById = async (req: Request, res: Response, next: NextFunction) => {
        try{
            let technicianId = parseInt(req.params.id);
            if (isNaN(technicianId)) {
                next(AppError.badRequest("El ID no es válido"));
            }
            const technician = await this.prisma.userTechnician.findFirst({
                where: {
                    id: technicianId
                },
                include: {
                    user: true,
                    tickets: true,
                    specialities: true
                }
            });
            if (!technician) {
                return next(AppError.notFound("Técnico no encontrado"));
            }
            res.json(technician);
        }catch(error){
            next(error);
        }
    };
}