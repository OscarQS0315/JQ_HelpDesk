import { Component, computed, inject, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketModel } from '../../share/models/TicketModel';
import { Router } from '@angular/router';
import { TicketService } from '../../share/services/api/ticket.service';
import { UserService } from '../../share/services/api/user.service';
import { UserModel } from '../../share/models/UserModel';
import { RouterModule } from '@angular/router';
import { BreadcrumbBackComponent } from '../../share/components/breadcrumb-back/breadcrumb-back.component';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthenticationService } from '../../share/services/app/authentication.service';
import { E_Role } from '../../share/models/enums/role.enum';

@Component({
  selector: 'app-status-card',
  standalone: true,
  templateUrl: './visualizacion-ticket.html',
  styleUrls: ['./visualizacion-ticket.css'],
  imports: [CommonModule, RouterModule, BreadcrumbBackComponent, TranslocoModule]
})


export class VisualizacionTicket implements OnInit {

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


  authUser = this.currentUser()?.id;

  data = signal<TicketModel[]>([]);

  constructor(
    private router: Router,
    private TService: TicketService,
    private UService: UserService,
    private transloco: TranslocoService
  ) { }

  ngOnInit(): void {
    this.listTickets(this.authUser);
    this.updateProgressPercentage();
  }




  listTickets(userId?: number): void {
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
        return this.transloco.translate('PendingStatus');
      case 'ASSIGNED':
        return this.transloco.translate('AssignedStatus');
      case 'IN_PROGRESS':
        return this.transloco.translate('InProgressStatus');
      case 'RESOLVED':
        return this.transloco.translate('ResolvedStatus');
      case 'CLOSED':
        return this.transloco.translate('ClosedStatus');
      default:
        return this.transloco.translate('UnknowStatus');
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