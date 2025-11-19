import { E_TicketPriority } from "../enums/ticketPriority.enum";
export interface TicketDTO {
    title: string;
    description: string;
    priority: E_TicketPriority; 
    storyPoints?: number;
    aceptanceCriteria?: string;
    comments: string;
    userId: number;
    ticketCategoryId: number;
    ticketImages: { url: string }[];
}
