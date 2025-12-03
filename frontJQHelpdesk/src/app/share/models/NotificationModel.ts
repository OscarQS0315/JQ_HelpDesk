import { E_NotificationType } from "./enums/notificationType.enum";
import { TicketModel } from "./TicketModel";
import { UserModel } from "./UserModel";

export interface NotificationModel {
    id: number;
    title: string;
    toUserId: number;
    fromUserId?: number;
    message: string;
    isRead: boolean;
    ticketId?: number;
    type: E_NotificationType;
    createdAt: Date;
    updatedAt: Date;

    toUser: UserModel;
    fromUser?: UserModel;
    ticket?: TicketModel;
}