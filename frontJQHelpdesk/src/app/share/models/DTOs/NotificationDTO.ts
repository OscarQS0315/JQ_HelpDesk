import { E_NotificationType } from "../enums/notificationType.enum";

export interface NotificationDTO {
    id?: number;
    title: string;
    toUserId?: number;
    fromUserId?: number | null;
    ticketId?: number | null;
    message?: string;
    isRead?: boolean;
    type: E_NotificationType;
}
