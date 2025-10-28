import {Router} from 'express';
import { TicketController } from '../controllers/ticketCotroller';

export class TicketRoutes{
    static get routes(): Router{
        const router = Router();
        const controller = new TicketController();
        router.get('/', controller.get);
        
        router.get('/:id', controller.getById);
        router.get('/by-role/:userId', controller.getByRole);
        return router;
    }
}