import {Router} from 'express';
import { SpecialitiesController } from '../controllers/specialitiesController';

export class SpecialityRoutes{
    static get routes(): Router{
        const router = Router();
        const controller = new SpecialitiesController();

        router.get('/', controller.get);
        router.get('/:id', controller.getById);
        
        return router;
    }

}