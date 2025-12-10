import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { authenticateJWT, authorizeRoles } from '../middleware/authMiddleware';
import { E_Role } from '../../generated/prisma';

export class UserRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new UserController();
        
        router.post("/login", controller.login);
        router.post("/register", controller.register);
        router.get("/profile", authenticateJWT, controller.userAuth);
        router.get('/:id', controller.getById);
        router.get('/', controller.get);
        return router;
    }

}