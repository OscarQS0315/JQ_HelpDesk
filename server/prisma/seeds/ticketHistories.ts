import { E_TicketStatus } from "../../generated/prisma";
export const ticketHistories = [
  { ticketId: 1, status: E_TicketStatus.ASSIGNED, changedBy: 1 },
  { ticketId: 2, status: E_TicketStatus.IN_PROGRESS, changedBy: 2 },
  { ticketId: 3, status: E_TicketStatus.PENDING, changedBy: 3 },
  { ticketId: 4, status: E_TicketStatus.RESOLVED, changedBy: 1 },
  { ticketId: 5, status: E_TicketStatus.IN_PROGRESS, changedBy: 2 },
  { ticketId: 6, status: E_TicketStatus.ASSIGNED, changedBy: 3 },
];
