import { NextFunction, response } from "express";
import { PrismaClient } from "../../generated/prisma";

import { Request, Response } from "express";

export class HistoryController {
    prisma = new PrismaClient();


    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Entró al Create de Historial");
            const body = req.body;

            const uptadeTicketHistory = await this.prisma.ticket.update({
                where: { id: body.ticketId },
                data: {
                    status: body.status,
                    ticketHistory: {
                        create: {
                            observation: body.observation,
                            status: body.status,
                            changedBy: body.changedBy,
                            ticketImages: {
                                create: body.ticketImages.map((img: { url: string }) => ({
                                    imageUrl: img.url
                                }))
                            }
                        }
                    }
                },
            });

            res.status(201).json(uptadeTicketHistory);
        } catch (error) {
            console.error("Error creando tecnico:", error);
            next(error);
        }
    }
}