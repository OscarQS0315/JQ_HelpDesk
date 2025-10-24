import {Router} from 'express';
import {UserController} from '../controllers/userController';

export class UserRoutes{
    static get routes(): Router{
        const router = Router();
        const controller = new UserController();

        router.get('/', controller.get);

        return router;
    }

}