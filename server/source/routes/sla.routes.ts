import {Router} from 'express';
import { SlaController } from '../controllers/slaController';
import { authenticateJWT } from '../middleware/authMiddleware';

export class SlaRoutes{
    static get routes(): Router{
        const router = Router();
        const controller = new SlaController();

        router.get('/', authenticateJWT, controller.get);
        
        return router;
    }

}