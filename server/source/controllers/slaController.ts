import { NextFunction } from "express";
import { PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";
export class SlaController {
    prisma = new PrismaClient();


    get = async (req: Request, res: Response, next: NextFunction) => {
            try {
                const slas = await this.prisma.sLA.findMany({
                });
                res.status(200).json(slas);
            } catch (error) {
                next(error);
            }
        };
}