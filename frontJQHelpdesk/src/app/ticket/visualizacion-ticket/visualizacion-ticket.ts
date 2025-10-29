import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketModel } from '../../share/models/TicketModel';
import { Router } from '@angular/router';
import { TicketService } from '../../share/services/api/ticket.service';
import { UserService } from '../../share/services/api/user.service';
import { UserModel } from '../../share/models/UserModel';
import { RouterModule } from '@angular/router';
import { BreadcrumbBackComponent } from '../../share/components/breadcrumb-back/breadcrumb-back.component';

@Component({
  selector: 'app-status-card',
  standalone: true,
  templateUrl: './visualizacion-ticket.html',
  styleUrls: ['./visualizacion-ticket.css'],
  imports: [CommonModule, RouterModule, BreadcrumbBackComponent]
})


export class VisualizacionTicket implements OnInit {

  authUser = 1;
  data = signal<TicketModel[]>([]);

  constructor(
    private router: Router,
    private TService: TicketService,
    private UService: UserService
  ) { }

  ngOnInit(): void {
    this.listTickets(this.authUser);
    this.updateProgressPercentage();
  }


  

  listTickets(userId: number): void {
    this.TService.getMethod(`by-role/${userId}`).subscribe((response: TicketModel | TicketModel[]) => {
      const tickets = Array.isArray(response) ? response : [response];
      this.data.set(tickets);
    });
  }




  @Input() taskTitle: string = 'ROLES';

  statuses: string[] = ['TÉCNICO', 'ADMIN', 'CLIENTE'];
  currentStatus: string = 'Not Started';
  progressPercentage: number = 0;



  updateStatus(status: string) {
    this.currentStatus = status;
    this.updateProgressPercentage();
  }

  updateProgressPercentage() {
    switch (this.currentStatus) {
      case 'TÉCNICO':
        this.progressPercentage = 0;
        break;
      case 'ADMIN':
        this.progressPercentage = 50;
        break;
      case 'CLIENTE':
        this.progressPercentage = 100;
        break;
      default:
        this.progressPercentage = 0;
    }
  }

  progressTicketBar(status: string): number {
    switch (status) {
      case 'PENDING':
        return 20;
      case 'ASSIGNED':
        return 40;
      case 'IN_PROGRESS':
        return 60;
      case 'RESOLVED':
        return 80;
      case 'CLOSED':
        return 100;
      default:
        return 0;
    }
  }

  ticketStatusString(status: string): string {
    switch (status) {
      case 'PENDING':
        return 'PENDIENTE';
      case 'ASSIGNED':
        return 'ASIGNADO';
      case 'IN_PROGRESS':
        return 'EN PROGRESO';
      case 'RESOLVED':
        return 'RESUELTO';
      case 'CLOSED':
        return 'CERRADO';
      default:
        return 'DESCONOCIDO';
    }
  }
  getIconClass(status: string): string {
    switch (status) {
      case 'Not Started':
        return 'fa-circle';
      case 'In Progress':
        return 'fa-spinner';
      case 'Completed':
        return 'fa-check';
      default:
        return 'fa-question';
    }
  }




}