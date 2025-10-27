import { TicketHistoryObservationModel } from "./TicketHistoryObservationModel";
import { TicketModel } from "./TicketModel";

export interface TicketImageModel {
    id: number;
    ticketId: number;
    ticketHistoryObservationId?: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;

    ticket: TicketModel;
    ticketHistoryObservation?: TicketHistoryObservationModel;
}