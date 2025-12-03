import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild, ElementRef, signal, inject, computed } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BreadcrumbBackComponent } from "../../share/components/breadcrumb-back/breadcrumb-back.component";
import { HistoryService } from "../../share/services/api/history.service";
import { FileUploadService } from "../../share/services/api/file-upload.service";
import { UserService } from "../../share/services/api/user.service";
import { NotificationService } from '../../share/services/app/notification.service';
import { TicketService } from "../../share/services/api/ticket.service";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";
import { forkJoin } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { UserModel } from "../../share/models/UserModel";
import { Router } from "@angular/router";
import { TicketHistoryDTO } from "../../share/models/DTOs/TicketHistoryDTO";
import { AuthenticationService } from "../../share/services/app/authentication.service";
import { UserNotificationAppService } from "../../share/services/app/user-notification.service";
import { E_Role } from "../../share/models/enums/role.enum";
import { NotificationDTO } from "../../share/models/DTOs/NotificationDTO";
import { E_NotificationType } from "../../share/models/enums/notificationType.enum";
import { E_TicketStatus } from "../../share/models/enums/ticketStatus.enum";


@Component({
  selector: "app-update-ticket",
  standalone: true,
  templateUrl: "./update-ticket.html",
  styleUrls: ["./update-ticket.css"],
  imports: [CommonModule, RouterModule, BreadcrumbBackComponent, ReactiveFormsModule, TranslocoModule]
})
export class UpdateTicket implements OnInit {


  authService = inject(AuthenticationService);
  readonly currentUser = this.authService.user;
  readonly isAuthenticated = computed(() => this.authService.authenticated());
  readonly userId = computed(() => this.currentUser()?.id);
  readonly role = computed(() => {
    const user = this.currentUser();
    return user?.role as E_Role | undefined;
  });

  readonly isAdmin = computed(() => this.role() === E_Role.ADMIN);
  readonly isUser = computed(() => this.role() === E_Role.USER);
  readonly isTechnician = computed(() => this.role() === E_Role.TECHNICIAN);

  user = signal<UserModel | null>(null);
  authUser = signal<any | null>(null);


  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  imageError: string | null = null;


  @ViewChild("fileInput") fileInput!: ElementRef;


  profileForm!: FormGroup;
  today = new Date().toISOString().split('T')[0];
  isLoading = false;

  originalStatus: string = '';

  ticketId: number = 0;

  availableStates: { value: E_TicketStatus; label: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private historyService: HistoryService,
    private uploadService: FileUploadService,
    private userService: UserService,
    private noti: NotificationService,
    private transloco: TranslocoService,
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService,
    private appNoti: UserNotificationAppService
  ) {
    this.ticketId = Number(this.route.snapshot.paramMap.get('id'));
  }
  

  ngOnInit() {
    this.initForm();

    this.loadTicket();
    console.log(this.currentUser());
  }


  initForm() {
    this.profileForm = this.fb.group({
      titulo: ["", Validators.required],
      descripcion: ["", Validators.required],
      Fecha: ["", Validators.required],
      status: [E_TicketStatus, Validators.required],
      observacion: ["", Validators.required],
      FechaActual: [this.today]
    });
  }


  loadTicket() {
    this.ticketService.getById(this.ticketId).subscribe(ticket => {

      this.profileForm.patchValue({
        titulo: ticket.title,
        descripcion: ticket.description,
        Fecha: this.formatDate(ticket.createdAt),
        status: ticket.status as E_TicketStatus,
        observacion: ""
      });

      this.user.set(ticket.user);
      this.setAvailableStates(ticket.status);
      this.originalStatus = ticket.status;
    });
  }

  hasStatusChanged(): boolean {
    return this.profileForm.get('status')?.value !== this.originalStatus;
  }


  formatDate(dateStr: Date): string {
    const date = new Date(dateStr);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${date.getFullYear()}-${month}-${day}`;
  }



  onFileSelected(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (!files) return;

    Array.from(files).forEach(file => this.handleFile(file));
  }

  onDragOver(e: DragEvent) { e.preventDefault(); }
  onDragLeave(e: DragEvent) { e.preventDefault(); }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (!files) return;

    Array.from(files).forEach(file => this.handleFile(file));
  }

  handleFile(file: File) {
    if (!file.type.match(/image\/(jpeg|png|webp)/)) {
      this.imageError = "Formato inválido";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.imageError = "Máximo 5MB";
      return;
    }

    this.imageError = null;
    this.selectedFiles.push(file);

    const reader = new FileReader();
    reader.onload = () => this.imagePreviews.push(reader.result as string);
    reader.readAsDataURL(file);
  }

  removeImage(index: number) {
    this.selectedFiles.splice(index, 1);
    this.imagePreviews.splice(index, 1);
  }


  onSubmit() {
    this.profileForm.markAllAsTouched();

    if (this.profileForm.invalid) {
      this.noti.error(this.transloco.translate('NotiInvalid'), this.transloco.translate('NotiInvalidForm'), 5000);
      return;
    }

    if (!this.hasStatusChanged()) {
      this.noti.error(this.transloco.translate('NoChanges'), this.transloco.translate('ChangeStatusToContinue'), 5000);
      return;
    }

    if (this.selectedFiles.length === 0) {
      this.noti.error(this.transloco.translate('ImageNecessary'), this.transloco.translate('MustSelectImage'), 5000);
      return;
    }

    this.isLoading = true;
    this.submitHistory();
  }
  submitHistory() {
    const form = this.profileForm.value;


    const payload: TicketHistoryDTO = {
      ticketId: this.ticketId,
      status: form.status as E_TicketStatus,
      observation: form.observacion,
      changedBy: this.currentUser()?.id,
      ticketImages: []
    };


    if (this.selectedFiles.length === 0) {
      this.noti.error(this.transloco.translate('ImageNecessary'), this.transloco.translate('MustSelectImage'), 5000);
      this.isLoading = false;
      return;
    }


    const uploads$ = this.selectedFiles.map(file =>
      this.uploadService.upload(file, null)
    );

    forkJoin(uploads$).subscribe({
      next: (results: any[]) => {
        payload.ticketImages = results.map(r => ({ url: r.fileName }));
        this.saveHistory(payload);
      },
      error: () => {
        this.noti.error(this.transloco.translate('ErrorUploadingImages'), this.transloco.translate('TryAgain'), 5000);
        this.isLoading = false;
      }
    });
  }
  saveHistory(payload: TicketHistoryDTO) {
    this.historyService.create(payload).subscribe({
      next: (res) => {
        this.noti.success(this.transloco.translate('StatusUpdatedSuccessfully'), this.transloco.translate('HistorySavedSuccessfully'), 5000);
        const notificationDTO : NotificationDTO = {
          
                  title: `Nuevo cambio de Estado de Ticket`,
                  message: payload.observation,
                  type: E_NotificationType.TICKET_UPDATE,
                  toUserId: res.userId,
                  fromUserId : this.authService.user()?.id
                };
                this.appNoti.newUserNotification(notificationDTO);
                console.log("Notification DTO", notificationDTO);
                this.router.navigate(['/VisualizacionTicket']);
      },
      error: () => {
        this.noti.error(this.transloco.translate('Error'), this.transloco.translate('ErrorUpdatingTicket'), 5000);
      },
      complete: () => this.isLoading = false
    });
  }


  resetForm() {


    this.profileForm.patchValue({
      observacion: ""
    });


    this.selectedFiles = [];
    this.imagePreviews = [];
    this.imageError = null;

    this.noti.info(
      this.transloco.translate('OperationSuccesfull'),
      this.transloco.translate('FormReset'),
      2000
    );
  }


  setAvailableStates(current: string) {
    switch (current) {
      case "PENDING":
        this.availableStates = [
          { value: E_TicketStatus.PENDING, label: this.transloco.translate('PendingStatus') },
        ];
        break;

      case "ASSIGNED":
        this.availableStates = [
          { value: E_TicketStatus.ASSIGNED, label: this.transloco.translate('AssignedStatus') },
          { value: E_TicketStatus.IN_PROGRESS, label: this.transloco.translate('InProgressStatus') }
        ];
        break;

      case "IN_PROGRESS":
        this.availableStates = [
          { value: E_TicketStatus.IN_PROGRESS, label: this.transloco.translate('InProgressStatus') },
          { value: E_TicketStatus.RESOLVED, label: this.transloco.translate('ResolvedStatus') }
        ];
        break;

      case "RESOLVED":
        this.availableStates = [
          { value: E_TicketStatus.RESOLVED, label: this.transloco.translate('ResolvedStatus') },
          { value: E_TicketStatus.CLOSED, label: this.transloco.translate('ClosedStatus') }
        ];
        break;

      case "CLOSED":
        this.availableStates = [
          { value: E_TicketStatus.CLOSED, label: this.transloco.translate('ClosedStatus') }
        ];
        break;
    }
  }





  canSelectState(value: string) {
    return this.availableStates.some(s => s.value === value);
  }


}




