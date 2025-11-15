import {Router} from 'express';
import { SpecialitiesController } from '../controllers/specialitiesController';
import { EtiquetteController } from '../controllers/etiquetteController';

export class EtiquetteRoutes{
    static get routes(): Router{
        const router = Router();
        const controller = new EtiquetteController();

        router.get('/', controller.get);

        router.get('/:id', controller.getById);
        
        return router;
    }

}