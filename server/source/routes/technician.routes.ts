import {Router} from 'express';
import { TechnicianController } from '../controllers/technicianController';

export class TechnicianRoutes{
    static get routes(): Router{
        const router = Router();
        const controller = new TechnicianController();
        router.get('/', controller.get);
        router.get('/:id', controller.getById);
        return router;
    }
}