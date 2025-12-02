import { Component, computed, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbBackComponent } from '../../share/components/breadcrumb-back/breadcrumb-back.component';
import { TicketService } from '../../share/services/api/ticket.service';
import { TicketModel } from '../../share/models/TicketModel';
import { E_TicketStatus } from '../../share/models/enums/ticketStatus.enum';
import { E_TicketPriority } from '../../share/models/enums/ticketPriority.enum';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { TechnicianModel } from '../../share/models/TechnicianModel';
import { TechnicianService } from '../../share/services/api/technician.service';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../share/services/app/notification.service';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
}

@Component({
  selector: 'app-status-card',
  standalone: true,
  templateUrl: './listado-ticket.html',
  styleUrls: ['./listado-ticket.css'],
  imports: [CommonModule, RouterModule, BreadcrumbBackComponent, TranslocoModule, FormsModule]
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
  selectedTicket!: TicketModel;
  isModalOpen: boolean = false;
  showTechniciansSection: boolean = false;
  dataTechnicians = signal<TechnicianModel[]>([]);
  data = signal<{ tickets: any[] }>({ tickets: [] });
  searchQuery: string = '';

  authUser = 1;


  constructor(private ticketService: TicketService, private transloco: TranslocoService, private TechService: TechnicianService, private noti: NotificationService) { }

  ngOnInit() {
    this.generateCalendarDays();
    this.generateWeekViewDays();
    this.listTickets(this.authUser);
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
    const now = new Date();
    const slaDate = new Date(ticket.slaResolution);
    const diffMs = slaDate.getTime() - now.getTime();


    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));


    return Math.max(diffDays, 0);
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
        return this.transloco.translate('LowPriority');
      case E_TicketPriority.MEDIUM:
        return this.transloco.translate('MidPriority');
      case E_TicketPriority.HIGH:
        return this.transloco.translate('HighPriority');
      default:
        return this.transloco.translate('UnknowPriority');
    }
  }
  getStatusLabel(status: E_TicketStatus): string {
    switch (status) {
      case E_TicketStatus.PENDING:
        return this.transloco.translate('PendingStatus');
      case E_TicketStatus.ASSIGNED:
        return this.transloco.translate('AssignedStatus');
      case E_TicketStatus.IN_PROGRESS:
        return this.transloco.translate('InProgressStatus');
      case E_TicketStatus.RESOLVED:
        return this.transloco.translate('ResolvedStatus');
      case E_TicketStatus.CLOSED:
        return this.transloco.translate('ClosedStatus');
      default:
        return this.transloco.translate('UnknowStatus');
    }
  }

  openModal(ticket: TicketModel) {
    this.selectedTicket = ticket;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  onConfirm(): void {
    if (this.showTechniciansSection) {
      console.log("Asignando técnico:", this.selectedItem);
      const tiketId = this.selectedTicket.id;
      const technicianId = this.selectedItem?.id;
      const payload = { technicianId: technicianId };
      this.ticketService.putMethod(`manual-assign/${tiketId}`, payload).subscribe({
        next: (response) => {
          console.log("Técnico  asignado manualmente:", response);
          this.listTickets(this.authUser);
          this.noti.success("Operación exitosa", `Ticket ${response.updatedTicket.id} asignado Manualmente a ${response.updatedTicket.technician.user.name} ${response.updatedTicket.technician.user.lastName}`, 5000);
          this.ngOnInit();
        },
        error: (error) => {
          console.error("Error al asignar técnico manualmente:", error);
        }
      });
    } else {

      console.log("Asignación automática activada");
      const tiketId = this.selectedTicket.id;
      this.ticketService.putMethod(`auto-assign/${tiketId}`).subscribe({
        next: (response) => {
          console.log("Técnico  asignado automáticamente:", response);
          this.listTickets(this.authUser);
          this.noti.success("Operación exitosa", `Técnico ${response.assignedTechnician.user.name} ${response.assignedTechnician.user.lastName} 
                             Puntaje: ${response.puntaje}`, 5000);
          this.ngOnInit();
        },
        error: (error) => {
          console.error("Error al asignar técnico automáticamente:", error);
        }
      });

    }

    this.closeModal();
  }

  onCancel(): void {
    this.listTechnicians();
    this.showTechniciansSection = true;
  }

  onBack(): void {
    this.showTechniciansSection = false;
  }

  selectedItem: TechnicianModel | null = null;


  listTechnicians(): void {
    this.TechService.get().subscribe((response: TechnicianModel[]) => {
      console.log('Técnicos cargados:', response);
      this.dataTechnicians.set(response);
    });
  }


  get filteredData(): TechnicianModel[] {
    const query = this.searchQuery.toLowerCase();
    return this.dataTechnicians().filter(item =>
      item.user.name.toLowerCase().includes(query) ||
      item.user.lastName.toLowerCase().includes(query) ||
      item.user.email.toLowerCase().includes(query) ||
      item.specialities.some(tag => tag.name.toLowerCase().includes(query))
    );
  }


  selectItem(item: TechnicianModel): void {
    this.selectedItem = item;
  }

  trackById(index: number, item: TechnicianModel) {
    return item.id;
  }



  activeTicketsCount(): number {
    const tickets = this.data()?.tickets || [];
    return tickets.filter(ticket =>
      ticket.status !== 'RESOLVED' && ticket.status !== 'CLOSED'
    ).length;
  }

  readonly ticketsByTechnician = computed(() => {
    const tickets = this.data()?.tickets ?? [];

    const map = new Map<number, number>();

    tickets.forEach(ticket => {
      if (ticket.technician?.id) {
        const techId = ticket.technician.id;

        const isActive = ticket.status !== 'RESOLVED' && ticket.status !== 'CLOSED';

        if (isActive) {
          map.set(techId, (map.get(techId) ?? 0) + 1);
        }
      }
    });

    return map;
  });

  getTicketsCountForTechnician(technicianId: number): number {
    const tickets = this.data()?.tickets ?? [];

    return tickets.filter(t =>
      t.technicianId === technicianId &&
      t.status !== 'RESOLVED' &&
      t.status !== 'CLOSED'
    ).length;
  }

  listTickets(userId: number): void {
    this.ticketService.getMethod(`by-role/${userId}`)
      .subscribe((response: TicketModel | TicketModel[]) => {
        const tickets = Array.isArray(response) ? response : [response];
        this.data.set({ tickets }); // Guardar todos
      });
  }
}
