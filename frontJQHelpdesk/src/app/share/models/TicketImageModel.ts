
import { TicketModel } from "./TicketModel";
import { TicketHistoryModel } from "./TicketHistoryModel";
export interface TicketImageModel {
    id: number;
    ticketId: number;
    ticketHistoryId?: number;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;

    ticket: TicketModel;
    ticketHistory: TicketHistoryModel;
}