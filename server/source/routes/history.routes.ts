import {Router} from 'express';
import { HistoryController } from '../controllers/historyController';
import { authenticateJWT, authorizeRoles } from '../middleware/authMiddleware';
import { E_Role } from '../../generated/prisma';

export class HistoryRoutes{
    static get routes(): Router{
        const router = Router();
        const controller = new HistoryController();

        router.post('/', authenticateJWT, authorizeRoles(E_Role.ADMIN), controller.create);
        
        return router;
    }
    
}