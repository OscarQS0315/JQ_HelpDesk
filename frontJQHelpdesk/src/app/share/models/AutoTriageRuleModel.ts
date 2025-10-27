import { E_TicketPriority } from "./enums/ticketPriority.enum";
import { TicketModel } from "./TicketModel";
export interface AutoTriageRuleModel {
    id: number;
    timeRemainingSLA: number;
    ticketPriorityId: E_TicketPriority;
    technicianSpecialityId: number;
    createdAt: Date;
    updatedAt: Date;

   
    tickets: TicketModel[];
}