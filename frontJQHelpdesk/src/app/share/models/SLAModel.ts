import { TicketCategoryModel } from "./TicketCategoryModel";
export interface SLAModel {
    id: number;
    name: string;
    description: string;
    slaReplyHours: number;
    slaResolutionHours: number;
    createdAt: Date;
    updatedAt: Date;


    ticketCategories: TicketCategoryModel[];
}