import { Router } from "express";
import { TicketCategoryController } from "../controllers/ticketCategoryController";

export class TicketCategoryRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new TicketCategoryController();
        router.get('/', controller.get);
        router.get('/:id', controller.getById);
        router.post("/", controller.create );
        router.put("/:id", controller.update);
        return router;
    }
}