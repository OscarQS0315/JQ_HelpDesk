
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../share/services/api/ticket.service';
import { TicketModel } from '../../share/models/TicketModel';
import { E_TicketStatus } from '../../share/models/enums/ticketStatus.enum';
import { E_TicketPriority } from '../../share/models/enums/ticketPriority.enum';
import { E_AssignedMethod } from '../../share/models/enums/assignedMethod.enum';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbBackComponent } from '../../share/components/breadcrumb-back/breadcrumb-back.component';
import { TranslocoModule } from '@jsverse/transloco';
import { AuthenticationService } from '../../share/services/app/authentication.service';
import { E_Role } from '../../share/models/enums/role.enum';

@Component({
  selector: "app-stepper",
  standalone: true,
  templateUrl: "./detalle-ticket.html",
  styleUrls: ["./detalle-ticket.css"],
  imports: [CommonModule, RouterModule, BreadcrumbBackComponent, TranslocoModule]
})
export class DetalleTicket {
  ticket = signal<TicketModel | null>(null);

  constructor(private route: ActivatedRoute, private ticketService: TicketService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketService.getById(id).subscribe((data) => this.ticket.set(data));
  }

  authService = inject(AuthenticationService);
  readonly currentUser = this.authService.user;
  readonly isAuthenticated = computed(() => this.authService.authenticated());


  readonly role = computed(() => {
    const user = this.currentUser();
    return user?.role as E_Role | undefined;
  });

  readonly isAdmin = computed(() => this.role() === E_Role.ADMIN);
  readonly isUser = computed(() => this.role() === E_Role.USER);
  readonly isTechnician = computed(() => this.role() === E_Role.TECHNICIAN);

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
  formatDateTimeShort(date?: Date): string {
    if (!date) return '--';
    const d = new Date(date);
    return d.toLocaleString('es-CR', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
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

  selectedImageUrl: string | null = null;

  openImage(url: string): void {
    this.selectedImageUrl = url;
  }

  closeImage(): void {
    this.selectedImageUrl = null;
  }

}

