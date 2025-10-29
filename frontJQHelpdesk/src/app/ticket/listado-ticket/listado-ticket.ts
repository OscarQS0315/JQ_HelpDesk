import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbBackComponent } from '../../share/components/breadcrumb-back/breadcrumb-back.component';
import { TicketService } from '../../share/services/api/ticket.service';
import { TicketModel } from '../../share/models/TicketModel';
import { E_TicketStatus } from '../../share/models/enums/ticketStatus.enum';
import { E_TicketPriority } from '../../share/models/enums/ticketPriority.enum';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
}

@Component({
  selector: 'app-status-card',
  standalone: true,
  templateUrl: './listado-ticket.html',
  styleUrls: ['./listado-ticket.css'],
  imports: [CommonModule, RouterModule, BreadcrumbBackComponent]
})
export class ListadoTicket implements OnInit {
  isExpanded = false;

  readonly tickets = signal<TicketModel[]>([]);
  readonly currentDate = signal(new Date());
  readonly selectedDate = signal(new Date());
  readonly currentView = signal<'month' | 'week'>('month');
  readonly expandedTickets = signal(new Map<number, boolean>());

  weekDays: string[] = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  calendarDays: CalendarDay[] = [];
  weekViewDays: CalendarDay[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.generateCalendarDays();
    this.generateWeekViewDays();
    this.ticketService.get().subscribe((response: TicketModel[]) => {
      this.tickets.set(
        response.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
      );
    });
  }

  getTicketsForDate(date: Date): TicketModel[] {
    return this.tickets().filter(ticket => {
      const created = new Date(ticket.createdAt);
      return created.getDate() === date.getDate() &&
        created.getMonth() === date.getMonth() &&
        created.getFullYear() === date.getFullYear();
    });
  }

  getSlaRemaining(ticket: TicketModel): number {
    const created = new Date(ticket.createdAt);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(ticket.slaResolution - diffDays, 0);
  }

  toggleExpand(ticketId: number): void {
    const current = this.expandedTickets();
    const updated = new Map(current);
    updated.set(ticketId, !current.get(ticketId));
    this.expandedTickets.set(updated);
  }

  isTicketExpanded(ticketId: number): boolean {
    return this.expandedTickets().get(ticketId) ?? false;
  }

  viewDetails(ticketId: number): void {
    console.log('Viewing details...', ticketId);
  }

  takeAction(ticketId: number): void {
    console.log('Taking action...', ticketId);
  }

  generateCalendarDays() {
    const firstDayOfMonth = new Date(this.currentDate().getFullYear(), this.currentDate().getMonth(), 1);
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    this.calendarDays = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      this.calendarDays.push({
        date: date,
        isCurrentMonth: date.getMonth() === this.currentDate().getMonth()
      });
    }
  }

  generateWeekViewDays() {
    const startOfWeek = new Date(this.currentDate());
    startOfWeek.setDate(this.currentDate().getDate() - this.currentDate().getDay());

    this.weekViewDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + i);
      this.weekViewDays.push({
        date: date,
        isCurrentMonth: date.getMonth() === this.currentDate().getMonth()
      });
    }
  }

  previousView() {
    if (this.currentView() === "month") {
      this.currentDate().setMonth(this.currentDate().getMonth() - 1);
    } else {
      this.currentDate().setDate(this.currentDate().getDate() - 7);
    }
    this.updateView();
  }

  nextView() {
    if (this.currentView() === "month") {
      this.currentDate().setMonth(this.currentDate().getMonth() + 1);
    } else {
      this.currentDate().setDate(this.currentDate().getDate() + 7);
    }
    this.updateView();
  }

  goToToday() {
    this.currentDate.set(new Date());
    this.selectedDate.set(new Date());
    this.updateView();
  }

  updateView() {
    if (this.currentView() === "month") {
      this.generateCalendarDays();
    } else {
      this.generateWeekViewDays();
    }
  }

  switchView(view: "month" | "week") {
    this.currentView.set(view);
    this.updateView();
  }

  selectDate(date: Date) {
    this.selectedDate.set(date);
  }

  isCurrentDay(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }

  isSelectedDate(date: Date): boolean {
    return date.getDate() === this.selectedDate().getDate() &&
      date.getMonth() === this.selectedDate().getMonth() &&
      date.getFullYear() === this.selectedDate().getFullYear();
  }

  getPriorityLabel(priority: E_TicketPriority): string {
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
  getStatusLabel(status: E_TicketStatus): string {
    switch (status) {
      case E_TicketStatus.PENDING:
        return 'Pendiente';
      case E_TicketStatus.ASSIGNED:
        return 'Asignado';
      case E_TicketStatus.IN_PROGRESS:
        return 'En progreso';
      case E_TicketStatus.RESOLVED:
        return 'Resuelto';
      case E_TicketStatus.CLOSED:
        return 'Cerrado';
      default:
        return 'Desconocido';
    }
  }

}
