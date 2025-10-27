import { TicketModel } from "./TicketModel";
import { UserModel } from "./UserModel";

export interface NotificationModel {
    id: number;
    userId: number;
    message: string;
    isRead: boolean;
    ticketId?: number;
    createdAt: Date;
    updatedAt: Date;

    user: UserModel;
    ticket?: TicketModel;
}