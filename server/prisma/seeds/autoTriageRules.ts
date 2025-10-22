import { E_TicketPriority } from "../../generated/prisma";
export const autoTriageRules = [
  { timeRemainingSLA: 12, ticketPriority: E_TicketPriority.HIGH, technicianSpecialityId: 1 },
  { timeRemainingSLA: 24, ticketPriority: E_TicketPriority.MEDIUM, technicianSpecialityId: 2 },
  { timeRemainingSLA: 6, ticketPriority: E_TicketPriority.HIGH, technicianSpecialityId: 3 },
  { timeRemainingSLA: 48, ticketPriority: E_TicketPriority.LOW, technicianSpecialityId: 1 },
  { timeRemainingSLA: 18, ticketPriority: E_TicketPriority.MEDIUM, technicianSpecialityId: 2 },
  { timeRemainingSLA: 3, ticketPriority: E_TicketPriority.HIGH, technicianSpecialityId: 3 },
];
