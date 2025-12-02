
import { E_TicketStatus } from "../enums/ticketStatus.enum";
export interface TicketHistoryDTO {
    ticketId?: number;
    status?: E_TicketStatus;
    changedBy?: number;
    observation?: string;
    ticketImages?: { url: string }[];
    
}
