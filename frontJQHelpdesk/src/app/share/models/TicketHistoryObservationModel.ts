import { TicketHistoryModel } from "./TicketHistoryModule";
import { TicketImageModel } from "./TicketImageModel";

export interface TicketHistoryObservationModel {
    id: number;
    ticketHistoryId: number;
    observation: string;
    createdAt: Date;
    updatedAt: Date;

    ticketHistory: TicketHistoryModel;
    ticketImages: TicketImageModel[];
}