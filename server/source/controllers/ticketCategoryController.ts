import { NextFunction, response } from "express";
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

    create = async (req: Request, res: Response, next: NextFunction) => {

        const body = req.body;
        try {
            const errors: string[] = [];

            if (!body.name || typeof body.name !== "string") {
                errors.push("El campo 'name' es obligatorio y debe ser texto.");
            }

            if (!body.description || typeof body.description !== "string") {
                errors.push("El campo 'description' es obligatorio y debe ser texto.");
            }

            if (body.imageUrl && typeof body.imageUrl !== "string") {
                errors.push("El campo 'imageUrl' debe ser texto.");
            }

            if (!body.SLA || typeof body.SLA !== "object") {
                errors.push("El campo 'SLA' es obligatorio y debe ser un objeto con id.");
            } else {
                if (!body.SLA.id || typeof body.SLA.id !== "number") {
                    errors.push("El campo 'SLA.id' es obligatorio y debe ser numérico.");
                }
            }


            if (!body.specialities || !Array.isArray(body.specialities)) {
                errors.push("El campo 'specialities' es obligatorio y debe ser un array de objetos con id.");
            } else {
                body.specialities.forEach((s: any, i: number) => {
                    if (!s.id || typeof s.id !== "number") {
                        errors.push(`La speciality en posición ${i} debe tener un 'id' numérico.`);
                    }
                });
            }

            if (!body.categoryEtiquettes || !Array.isArray(body.categoryEtiquettes)) {
                errors.push("El campo 'categoryEtiquettes' es obligatorio y debe ser un array de objetos con id.");
            } else {
                body.categoryEtiquettes.forEach((c: any, i: number) => {
                    if (!c.id || typeof c.id !== "number") {
                        errors.push(`La categoryEtiquette en posición ${i} debe tener un 'id' numérico.`);
                    }
                });
            }

            if (errors.length > 0) {
                return res.status(400).json({ message: "Body inválido", errors });
            }



            const newCategory = await this.prisma.ticketCategory.create({
                data: {
                    name: body.name,
                    description: body.description,

                    imageUrl: body.imageUrl,
                    SLA: {
                        connect: { id: body.SLA.id }
                    },
                    specialities: {
                        connect: body.specialities.map((s: { id: number }) => ({ id: s.id }))
                    },
                    categoryEtiquettes: {
                        connect: body.categoryEtiquettes.map((e: { id: number }) => ({ id: e.id }))
                    }
                }
            });
            res.status(200).json(newCategory)

        } catch (error) {
            console.error("Error creando categoria:", error);
            next(error);
        }
    }


    update = async (req: Request, res: Response, next: NextFunction) => {

        try{
            const body = req.body; const errors: string[] = [];

            if (!body.name || typeof body.name !== "string") {
                errors.push("El campo 'name' es obligatorio y debe ser texto.");
            }

            if (!body.description || typeof body.description !== "string") {
                errors.push("El campo 'description' es obligatorio y debe ser texto.");
            }

            if (body.imageUrl && typeof body.imageUrl !== "string") {
                errors.push("El campo 'imageUrl' debe ser texto.");
            }

            if (!body.SLA || typeof body.SLA !== "object") {
                errors.push("El campo 'SLA' es obligatorio y debe ser un objeto con id.");
            } else {
                if (!body.SLA.id || typeof body.SLA.id !== "number") {
                    errors.push("El campo 'SLA.id' es obligatorio y debe ser numérico.");
                }
            }


            if (!body.specialities || !Array.isArray(body.specialities)) {
                errors.push("El campo 'specialities' es obligatorio y debe ser un array de objetos con id.");
            } else {
                body.specialities.forEach((s: any, i: number) => {
                    if (!s.id || typeof s.id !== "number") {
                        errors.push(`La speciality en posición ${i} debe tener un 'id' numérico.`);
                    }
                });
            }

            if (!body.categoryEtiquettes || !Array.isArray(body.categoryEtiquettes)) {
                errors.push("El campo 'categoryEtiquettes' es obligatorio y debe ser un array de objetos con id.");
            } else {
                body.categoryEtiquettes.forEach((c: any, i: number) => {
                    if (!c.id || typeof c.id !== "number") {
                        errors.push(`La categoryEtiquette en posición ${i} debe tener un 'id' numérico.`);
                    }
                });
            }

            if (errors.length > 0) {
                return res.status(400).json({ message: "Body inválido", errors });
            }

            const categoryId = parseInt(req.params.id);

            const existingCategory = await this.prisma.ticketCategory.findUnique({
                where:{
                    id: categoryId
                },
                include:{
                    SLA: true,
                    specialities: true,
                    categoryEtiquettes: true
                }
            });
            if (!existingCategory) {
                res.status(404).json({ message: "La categoria no existe no existe" })
            }
            const finalImage = body.imageUrl !== undefined ? body.imageUrl : existingCategory?.imageUrl;

            
            const disconnectSpecialities = existingCategory?.specialities.map((speciality:{id:number})=> ({id:speciality.id}));
            const disconnectEtiquettes = existingCategory?.categoryEtiquettes.map((etiquette: {id:number})=>({id:etiquette.id}));

            const connectSLA = body.SLA;
            const connectSpecialities = body.specialities? body.specialities.map((speciality:{id:number})=> ({id:speciality.id})):[];
            const connectEtiquettes = body.categoryEtiquettes? body.categoryEtiquettes.map((etiquette: {id:number})=>({id:etiquette.id})):[];

            const updatedCategory = await this.prisma.ticketCategory.update({
                where:{
                    id: categoryId
                },
                data: {
                    name: body.name,
                    description: body.description,
                    imageUrl: finalImage,
                    SLA: {
                        connect: connectSLA
                    },
                    specialities: {
                        disconnect: disconnectSpecialities,
                        connect: connectSpecialities
                    },
                    categoryEtiquettes: {
                        disconnect: disconnectEtiquettes,
                        connect: connectEtiquettes
                    }
                }
            });
            res.status(200).json(updatedCategory);

        }catch (error) {
            console.error("Error actualizando categoria:", error);
            next(error);
        }
    }

}