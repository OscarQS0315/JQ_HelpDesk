import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import { PrismaClient, E_Role, User } from "../../generated/prisma";
import passport from "passport";
import { generateToken } from "../config/authUtils";

const prisma = new PrismaClient();

export class UserController {
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { nombre, email, password, role } = req.body;

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const user = await prisma.user.create({
        data: {
          name: nombre,
          lastName: "",
          email,
          password: hash,
          role: E_Role[role as keyof typeof E_Role],
        },
      });

      res.status(201).json({
        success: true,
        message: "Usuario creado",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };

  login = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
      "local",
      { session: false },
      (
        err: Error | null,
        user: Express.User | false | null,
        info: { message?: string }
      ) => {
        if (err) return next(err);
        if (!user) {
          return res
            .status(401)
            .json({ success: false, message: info.message });
        }
        const token = generateToken(user as User);
        return res.json({
          success: true,
          message: "Inicio de sesión exitoso",
          token,
          user,
        });
      }
    )(req, res, next);
  };
  
  userAuth = (req: Request, res: Response, next: NextFunction) => {
    try {
      const usuario = req.user as User;
      res.json(usuario);

    } catch (error) {
      next(error);
    }
  };

  get = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const users = await prisma.user.findMany({
        include:{
          userTechnician: true,
          tickets: true,
          notificationsFrom: true,
          notificationsTo: true,
        },
        omit:{
          password: true
        }
      });
      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const { id } = req.params;
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        include:{
          userTechnician: true,
          tickets: true,
          notificationsFrom: true,
          notificationsTo: true
        },
        omit:{
          password: true
        }
      });
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
}
