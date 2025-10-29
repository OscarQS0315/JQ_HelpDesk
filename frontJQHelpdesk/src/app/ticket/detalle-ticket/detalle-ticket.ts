
import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../share/services/api/ticket.service';
import { TicketModel } from '../../share/models/TicketModel';
import { E_TicketStatus } from '../../share/models/enums/ticketStatus.enum';
import { E_TicketPriority } from '../../share/models/enums/ticketPriority.enum';
import { E_AssignedMethod } from '../../share/models/enums/assignedMethod.enum';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { BreadcrumbBackComponent } from '../../share/components/breadcrumb-back/breadcrumb-back.component';

@Component({
  selector: "app-stepper",
  standalone: true,
  templateUrl: "./detalle-ticket.html",
  styleUrls: ["./detalle-ticket.css"],
  imports: [CommonModule, RouterModule, BreadcrumbBackComponent]
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

  formatDateShort(date?: Date): string {
    return date ? new Date(date).toLocaleDateString() : '—';
  }
  formatStatus(status?: E_TicketStatus): string {
    switch (status) {
      case E_TicketStatus.PENDING:
        return 'Pendiente';
      case E_TicketStatus.ASSIGNED:
        return 'Asignado';
      case E_TicketStatus.IN_PROGRESS:
        return 'En Progreso';
      case E_TicketStatus.RESOLVED:
        return 'Resuelto';
      case E_TicketStatus.CLOSED:
        return 'Cerrado';
      default:
        return 'Desconocido';
    }
  }
  formatPriority(priority?: E_TicketPriority): string {
    switch (priority) {
      case E_TicketPriority.LOW:
        return 'Baja';
      case E_TicketPriority.MEDIUM:
        return 'Media';
      case E_TicketPriority.HIGH:
        return 'Alta';
      default:
        return 'Desconocida';
    }
  }
  formatAssignedMethod(method?: E_AssignedMethod): string {
    switch (method) {
      case E_AssignedMethod.MANUAL:
        return 'Manualmente';
      case E_AssignedMethod.AUTOMATIC:
        return 'Automáticamente';
      default:
        return 'No ha sido asignado';
    }
  }
}

