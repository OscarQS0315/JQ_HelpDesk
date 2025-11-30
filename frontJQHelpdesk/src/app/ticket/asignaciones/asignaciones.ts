import { Component, computed, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketModel } from '../../share/models/TicketModel';
import { Router } from '@angular/router';
import { TicketService } from '../../share/services/api/ticket.service';
import { UserService } from '../../share/services/api/user.service';
import { RouterModule } from '@angular/router';
import { BreadcrumbBackComponent } from '../../share/components/breadcrumb-back/breadcrumb-back.component';
import { TranslocoModule } from '@jsverse/transloco';
import { TechnicianModel } from '../../share/models/TechnicianModel';
import { TechnicianService } from '../../share/services/api/technician.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-status-card',
  standalone: true,
  templateUrl: './asignaciones.html',
  styleUrls: ['./asignaciones.css'],
  imports: [CommonModule, RouterModule, BreadcrumbBackComponent, TranslocoModule, FormsModule]
})


export class Asignaciones implements OnInit {

  authUser = 1;
  data = signal<{ tickets: any[] }>({ tickets: [] });
  dataShow = signal<{ tickets: any[] }>({ tickets: [] });
  dataTechnicians = signal<TechnicianModel[]>([]);
  showTechniciansSection: boolean = false;


  selectedTicket!: TicketModel;
  isModalOpen: boolean = false;

  constructor(
    private router: Router,
    private TService: TicketService,
    private UService: UserService,
    private TechService: TechnicianService
  ) { }

  ngOnInit(): void {
    this.listTicketsShow(this.authUser);
    this.listTickets(this.authUser);
  }

  readonly ticketsOpen = computed(() => {
    const tickets = this.data()?.tickets ?? [];
    return tickets.filter(ticket =>
      ticket.status !== 'RESOLVED' && ticket.status !== 'CLOSED'
    );
  });

  listTickets(userId: number): void {
    this.TService.getMethod(`by-role/${userId}`)
      .subscribe((response: TicketModel | TicketModel[]) => {
        const tickets = Array.isArray(response) ? response : [response];
        this.data.set({ tickets }); // Guardar todos
      });
  }

  listTicketsShow(userId: number): void {
    this.TService.getMethod(`by-role/${userId}`)
      .subscribe((response: TicketModel | TicketModel[]) => {
        const tickets = Array.isArray(response) ? response : [response];
        const pendingTickets = tickets.filter(t => t.status === 'PENDING');
        this.dataShow.set({ tickets: pendingTickets });
      });
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
    } else {

      console.log("Asignación automática activada");
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

  // === STATUS HELPERS ===
  progressTicketBar(status: string): number {
    switch (status) {
      case 'PENDING': return 20;
      case 'ASSIGNED': return 40;
      case 'IN_PROGRESS': return 60;
      case 'RESOLVED': return 80;
      case 'CLOSED': return 100;
      default: return 0;
    }
  }

  ticketStatusString(status: string): string {
    switch (status) {
      case 'PENDING': return 'PENDIENTE';
      case 'ASSIGNED': return 'ASIGNADO';
      case 'IN_PROGRESS': return 'EN PROGRESO';
      case 'RESOLVED': return 'RESUELTO';
      case 'CLOSED': return 'CERRADO';
      default: return 'DESCONOCIDO';
    }
  }

  selectedItem: TechnicianModel | null = null;


  searchQuery: string = '';


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

}


