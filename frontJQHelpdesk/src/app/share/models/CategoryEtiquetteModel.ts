import { TicketCategoryModel } from "./TicketCategoryModel";
export interface CategoryEtiquetteModel {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;

    ticketCategories: TicketCategoryModel[];
}