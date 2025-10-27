import { TicketModel } from "./TicketModel";

export interface TicketValorationModel {
    id: number;
    ticketId: number;
    rating: number;
    comments?: string;
    createdAt: Date;
    updatedAt: Date;

    ticket: TicketModel;
}