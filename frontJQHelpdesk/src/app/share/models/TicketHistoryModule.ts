import { E_TicketStatus } from "./enums/ticketStatus.enum";
import { TicketHistoryObservationModel } from "./TicketHistoryObservationModel";
import { TicketModel } from "./TicketModel";
import { UserModel } from "./UserModel";
export interface TicketHistoryModel {
    id: number;
    ticketId: number;
    status: E_TicketStatus;
    changedBy: number;
    changedAt: Date;

    ticket: TicketModel;
    user: UserModel;
    TicketHistoryObservations: TicketHistoryObservationModel;
}