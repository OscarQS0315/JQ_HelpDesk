import { Router } from 'express';
import { TechnicianController } from '../controllers/technicianController';
import { authenticateJWT, authorizeRoles } from '../middleware/authMiddleware';
import { E_Role } from '../../generated/prisma';

export class TechnicianRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new TechnicianController();

        router.get('/:id', authenticateJWT, controller.getById);

        router.get('/', 
            authenticateJWT, 
            authorizeRoles(E_Role.ADMIN), 
            controller.get
        );

        router.post('/', 
            authenticateJWT,
            authorizeRoles(E_Role.ADMIN),
            controller.create
        );

        router.put('/:id',
            authenticateJWT,
            authorizeRoles(E_Role.ADMIN),
            controller.update
        );

        return router;
    }
}
