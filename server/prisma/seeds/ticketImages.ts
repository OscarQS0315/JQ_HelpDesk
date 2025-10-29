import { ticketHistory } from './ticketHistories';

export const ticketImages = ticketHistory.map((h, index) => ({
  ticketId: h.ticketId,
  ticketHistoryId: index + 1, 
  imageUrl: `${h.status}${h.ticketId}.jpg`,
  createdAt: h.changedAt,
  updatedAt: h.changedAt
}));



