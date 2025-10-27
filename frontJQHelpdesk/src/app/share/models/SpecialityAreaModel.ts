import { TechnicianModel } from './TechnicianModel';
import { TicketCategoryModel } from './TicketCategoryModel';
export interface SpecialityAreaModel {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;

    technicians: TechnicianModel[];
    ticketCategories: TicketCategoryModel[];
}