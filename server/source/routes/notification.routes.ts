import { Router } from 'express';
import { NotificationController } from '../controllers/notificationController';
import { authenticateJWT, authorizeRoles } from '../middleware/authMiddleware';
import { E_Role } from '../../generated/prisma';

export class NotificationRoutes {
    static get routes(): Router {
            const router = Router();
            const controller = new NotificationController();
    
            router.get('/:id', authenticateJWT, controller.getUserNotifications);
    
    
            router.post('/', 
                authenticateJWT,
                controller.create
            );
    
            router.put('/mark-as-read/:id',
                authenticateJWT,
                controller.markAsRead
            );
            router.put('/mark-all-as-read/:userId',
                authenticateJWT,
                controller.markAllAsRead
            );
            return router;
        }
}