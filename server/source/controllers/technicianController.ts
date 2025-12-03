import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/custom.error";
import { E_Role, PrismaClient } from "../../generated/prisma";
import { specialities } from "../../prisma/seeds/specialities";

export class TechnicianController {
    prisma = new PrismaClient();

    //method to get all technicians
    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const technicians = await this.prisma.userTechnician.findMany({
                include: {
                    user: {
                        include:{
                            notificationsFrom: true,
                            notificationsTo: true,
                        },
                        omit:{
                            password:true
                        }
                    }, 
                    tickets: true,
                    specialities: true
                }
            });
            res.json(technicians);
        } catch (error) {
            next(error);
        }
    };

    //method to get technician by id
    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let technicianId = parseInt(req.params.id);
            if (isNaN(technicianId)) {
                next(AppError.badRequest("El ID no es válido"));
            }
            const technician = await this.prisma.userTechnician.findFirst({
                where: {
                    id: technicianId
                },
                include: {
                    user: {
                        include:{
                            notificationsFrom: true,
                            notificationsTo: true,
                        },
                        omit:{
                            password:true
                        }
                    },
                    tickets: true,
                    specialities: true
                },
                
            });
            if (!technician) {
                return next(AppError.notFound("Técnico no encontrado"));
            }
            res.json(technician);
        } catch (error) {
            next(error);
        }
    };




    create = async (req: Request, res: Response, next: NextFunction) => {

        try {
            console.log("Entró al Create");
            const body = req.body;

            const errors: string[] = [];


            if (!body.name || typeof body.name !== "string") {
                errors.push("El campo 'name' es obligatorio y debe ser texto.");
            }

            if (!body.lastName || typeof body.lastName !== "string") {
                errors.push("El campo 'lastName' es obligatorio y debe ser texto.");
            }

            if (!body.email || typeof body.email !== "string" || !body.email.includes("@")) {
                errors.push("El campo 'email' es obligatorio y debe ser un correo válido.");
            }

            if (!body.password || typeof body.password !== "string") {
                errors.push("El campo 'password' es obligatorio.");
            }

            if (!body.userTechnician || typeof body.userTechnician !== "object") {
                errors.push("El campo 'userTechnician' es obligatorio y debe ser un objeto.");
            } else {
                if (!body.userTechnician.status || typeof body.userTechnician.status !== "string") {
                    errors.push("El campo 'userTechnician.status' es obligatorio y debe ser texto.");
                }
                if (
                    body.userTechnician.workload !== undefined &&
                    typeof body.userTechnician.workload !== "number"
                ) {
                    errors.push("El campo 'userTechnician.workload' debe ser numérico.");
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
            if (errors.length > 0) {
                return res.status(400).json({ message: "Body inválido", errors });
            }
            const existingUser = await this.prisma.user.findUnique({
                where: { email: body.email }
            });

            if (existingUser) {
                return res.status(400).json({ message: "El email ya está registrado." });
            }
            const newTechnician = await this.prisma.user.create({
                data: {
                    name: body.name,
                    lastName: body.lastName,
                    email: body.email,
                    password: body.password,
                    profileImage: body.profileImage,
                    genre: body.genre,
                    dob: body.dob,
                    cellphone:body.cellphone,
                    role: E_Role.TECHNICIAN,
                    status: body.status,
                    userTechnician: {
                        create: {
                            status: body.userTechnician.status,
                            specialities: {
                                connect: body.specialities.map((s: { id: number }) => ({ id: s.id }))
                            }
                        }
                    },
                }
            });
            
            
            res.status(200).json(newTechnician);
        } catch (error) {
            console.error("Error creando tecnico:", error);
            next(error);
        }
    }

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            const errors: string[] = [];


            if (!body.name || typeof body.name !== "string") {
                errors.push("El campo 'name' es obligatorio y debe ser texto.");
            }

            if (!body.lastName || typeof body.lastName !== "string") {
                errors.push("El campo 'lastName' es obligatorio y debe ser texto.");
            }

            if (!body.email || typeof body.email !== "string" || !body.email.includes("@")) {
                errors.push("El campo 'email' es obligatorio y debe ser un correo válido.");
            }

            if (!body.password || typeof body.password !== "string") {
                errors.push("El campo 'password' es obligatorio.");
            }

            if (!body.userTechnician || typeof body.userTechnician !== "object") {
                errors.push("El campo 'userTechnician' es obligatorio y debe ser un objeto.");
            } else {
                if (!body.userTechnician.status || typeof body.userTechnician.status !== "string") {
                    errors.push("El campo 'userTechnician.status' es obligatorio y debe ser texto.");
                }
                if (
                    body.userTechnician.workload !== undefined &&
                    typeof body.userTechnician.workload !== "number"
                ) {
                    errors.push("El campo 'userTechnician.workload' debe ser numérico.");
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
            if (errors.length > 0) {
                return res.status(400).json({ message: "Body inválido", errors });
            }

            const userId = parseInt(req.params.id);

            const existingUser = await this.prisma.user.findUnique({
                where: {
                    id: userId
                },
                include: {
                    userTechnician: {
                        include: {
                            specialities: true
                        }
                    }
                }
            });
            if (!existingUser) {
                res.status(404).json({ message: "El Usuario no existe" })
            } else if (!existingUser?.userTechnician) {
                res.status(404).json({ message: "El Usuario no es Tecnico" })
            }

            if (body.email && body.email !== existingUser?.email) {
                const emailTaken = await this.prisma.user.findUnique({
                    where: { email: body.email }
                });

                if (emailTaken) {
                    return res.status(400).json({ message: "El email ya está registrado por otro usuario." });
                }
            }


            const finalImage = body.profileImage !== undefined ? body.profileImage : existingUser?.profileImage;
            const disconnectSpecialities = existingUser?.userTechnician?.specialities.map((speciality: { id: number }) => ({ id: speciality.id }));

            const connectSpecialities = body.specialities ? body.specialities.map((speciality: { id: number }) => ({ id: speciality.id })) : [];


            const updateUser = await this.prisma.user.update({
                where: { id: userId },
                data: {
                    name: body.name,
                    lastName: body.lastName,
                    email: body.email,
                    password: body.password,
                    profileImage: finalImage,
                    genre: body.genre,
                    dob: body.dob,
                    cellphone:body.cellphone,
                    role: E_Role.TECHNICIAN,
                    status: body.status,
                    userTechnician: {
                        update: {
                            status: body.userTechnician?.status,
                            workload: body.userTechnician?.workload,
                            specialities: {
                                disconnect: disconnectSpecialities,
                                connect: connectSpecialities
                            }
                        }
                    }
                },
                include: {
                    userTechnician: true
                }
            });
            res.json(updateUser)

        } catch (error) {
            console.error("Error actualizando el tecnico:", error);
            next(error);
        }
    }



}