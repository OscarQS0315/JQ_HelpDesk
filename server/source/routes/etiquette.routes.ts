import {Router} from 'express';
import { SpecialitiesController } from '../controllers/specialitiesController';
import { EtiquetteController } from '../controllers/etiquetteController';
import { authenticateJWT } from '../middleware/authMiddleware';

export class EtiquetteRoutes{
    static get routes(): Router{
        const router = Router();
        const controller = new EtiquetteController();

        router.get('/', authenticateJWT,  controller.get);

        router.get('/:id', authenticateJWT, controller.getById);
        
        return router;
    }

}