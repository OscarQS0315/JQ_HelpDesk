import { Router } from "express";
import { TicketCategoryController } from "../controllers/ticketCategoryController";
import { authenticateJWT, authorizeRoles } from "../middleware/authMiddleware";
import { E_Role } from "../../generated/prisma";

export class TicketCategoryRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new TicketCategoryController();
        router.get('/', authenticateJWT, controller.get);
        router.get('/:id', controller.getById);
        router.post("/", authenticateJWT, authorizeRoles(E_Role.ADMIN), controller.create);
        router.put("/:id", authenticateJWT, authorizeRoles(E_Role.ADMIN), controller.update);
        return router;
    }
}