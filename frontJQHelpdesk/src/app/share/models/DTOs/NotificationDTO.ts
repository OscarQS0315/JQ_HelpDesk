import { E_NotificationType } from "../enums/notificationType.enum";

export interface NotificationDTO {
toUserId: number;                 
fromUserId?: number | null;       
ticketId?: number | null;         
message?: string;                 
isRead?: boolean;                 
type: E_NotificationType;         
}
