import {Router} from 'express';
import { TicketController } from '../controllers/ticketCotroller';
import { authenticateJWT, authorizeRoles } from '../middleware/authMiddleware';
import { E_Role } from '../../generated/prisma';

export class TicketRoutes{
    static get routes(): Router{
        const router = Router();
        const controller = new TicketController();
        router.get('/',authenticateJWT, controller.get);
        router.post("/",authenticateJWT, authorizeRoles(E_Role.ADMIN), controller.create );
        //router.put("/:id", controller.update);
        router.get('/:id', authenticateJWT, controller.getById);
        router.get('/by-role/:userId', authenticateJWT, controller.getByRole);
        router.put('/auto-assign/:id', authenticateJWT, authorizeRoles(E_Role.ADMIN), controller.autoAssignTechnician);
        router.put('/manual-assign/:id', authenticateJWT, authorizeRoles(E_Role.ADMIN), controller.manualAssignTechnician);
        return router;
    }
}