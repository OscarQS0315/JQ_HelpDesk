import { ticketHistory } from './ticketHistories';

export const ticketImages = ticketHistory.map(h => ({
  ticketId: h.ticketId,
  ticketHistoryObservationId: h.id, 
  imageUrl: `${h.status}${h.ticketId}.jpg`,
  createdAt: h.changedAt,
  updatedAt: h.changedAt
}));


