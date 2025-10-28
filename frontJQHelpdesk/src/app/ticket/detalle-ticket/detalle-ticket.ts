
import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../share/services/api/ticket.service';
import { TicketModel } from '../../share/models/TicketModel';
import { E_TicketStatus } from '../../share/models/enums/ticketStatus.enum';

@Component({
  selector: "app-stepper",
  standalone: true,
  templateUrl: "./detalle-ticket.html",
  styleUrls: ["./detalle-ticket.css"],
  imports: []
})
export class DetalleTicket {
  ticket = signal<TicketModel | null>(null);

  constructor(private route: ActivatedRoute, private ticketService: TicketService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketService.getById(id).subscribe((data) => this.ticket.set(data));
  }

  formatDate(date?: string): string {
    return date ? new Date(date).toLocaleString() : '—';
  }

  progress(status: string): number {
    switch (status) {
      case 'PENDING': return 0;
      case 'ASSIGNED': return 25;
      case 'IN_PROGRESS': return 50;
      case 'RESOLVED': return 75;
      case 'CLOSED': return 100;
      default: return 0;
    }
  }

  progressTicketBar(status?: E_TicketStatus): number {
    switch (status) {
      case E_TicketStatus.PENDING:
        return 20;
      case E_TicketStatus.ASSIGNED:
        return 40;
      case E_TicketStatus.IN_PROGRESS:
        return 60;
      case E_TicketStatus.RESOLVED:
        return 80;
      case E_TicketStatus.CLOSED:
        return 100;
      default:
        return 0;
    }
  }
}



