import {Router} from 'express';
import {UserRoutes} from './user.routes';
import { TechnicianRoutes } from './technician.routes';
import { TicketCategoryRoutes } from './tickectCategory.routes';
import { TicketRoutes } from './ticket.routes';
import { SpecialityRoutes } from './speciality.routes';
import { EtiquetteRoutes } from './etiquette.routes';
import { ImageRoutes } from './image.routes';
export class AppRoutes{
    static get routes(): Router{
        const router = Router();

        router.use('/user', UserRoutes.routes);
        router.use('/technician', TechnicianRoutes.routes);
        router.use('/ticket-category', TicketCategoryRoutes.routes);
        router.use('/ticket', TicketRoutes.routes);
        router.use('/speciality', SpecialityRoutes.routes);
        router.use('/etiquette', EtiquetteRoutes.routes);
        router.use("/file/", ImageRoutes.routes);
        return router;
    }
}
    