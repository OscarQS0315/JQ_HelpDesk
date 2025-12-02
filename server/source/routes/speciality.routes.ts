import {Router} from 'express';
import { SpecialitiesController } from '../controllers/specialitiesController';
import { authenticateJWT } from '../middleware/authMiddleware';

export class SpecialityRoutes{
    static get routes(): Router{
        const router = Router();
        const controller = new SpecialitiesController();

        router.get('/', authenticateJWT,  controller.get);
        router.get('/:id', authenticateJWT, controller.getById);
        
        return router;
    }

}