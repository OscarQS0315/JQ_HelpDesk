import { E_TicketStatus } from "./enums/ticketStatus.enum";
import { TicketImageModel } from "./TicketImageModel";
import { TicketModel } from "./TicketModel";
import { UserModel } from "./UserModel";
export interface TicketHistoryModel {
    id: number;
    ticketId: number;
    status: E_TicketStatus;
    changedBy: number;
    changedAt: Date;
    observation: string;
    ticket: TicketModel;
    user: UserModel;
    ticketImages: TicketImageModel[];
}