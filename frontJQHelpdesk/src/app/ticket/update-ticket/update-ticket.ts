import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild, ElementRef, signal } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BreadcrumbBackComponent } from "../../share/components/breadcrumb-back/breadcrumb-back.component";
import { TicketService } from "../../share/services/api/ticket.service";
import { FileUploadService } from "../../share/services/api/file-upload.service";
import { UserService } from "../../share/services/api/user.service";
import { NotificationService } from '../../share/services/app/notification.service';

import { TranslocoModule, TranslocoService } from "@jsverse/transloco";
import { forkJoin } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { UserModel } from "../../share/models/UserModel";
import { Router } from "@angular/router";
import { TicketHistoryDTO } from "../../share/models/DTOs/TicketHistoryDTO";
@Component({
  selector: "app-update-ticket",
  standalone: true,
  templateUrl: "./update-ticket.html",
  styleUrls: ["./update-ticket.css"],
  imports: [CommonModule, RouterModule, BreadcrumbBackComponent, ReactiveFormsModule, TranslocoModule]
})
export class UpdateTicket implements OnInit {


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

  availableStates: { value: string; label: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private uploadService: FileUploadService,
    private userService: UserService,
    private noti: NotificationService,
    private transloco: TranslocoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.ticketId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.initForm();

    this.loadTicket();

  }


  initForm() {
    this.profileForm = this.fb.group({
      titulo: ["", Validators.required],
      descripcion: ["", Validators.required],
      Fecha: ["", Validators.required],
      status: ["", Validators.required],
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
        status: ticket.status,
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
      this.noti.error("Formulario inválido", "Debe completar todos los campos", 5000);
      return;
    }

    if (!this.hasStatusChanged()) {
      this.noti.error("Sin cambios", "Debe cambiar el estado para continuar", 5000);
      return;
    }

    if (this.selectedFiles.length === 0) {
      this.noti.error("Debe subir al menos una imagen", "Es obligatorio adjuntar imágenes", 5000);
      return;
    }

    this.isLoading = true;
    this.submitHistory();
  }
  submitHistory() {
    const form = this.profileForm.value;


    const payload: TicketHistoryDTO = {
      ticketId: this.ticketId,
      status: form.status,
      observation: form.observacion,
      changedBy: this.authUser()?.id,
      ticketImages: []
    };


    if (this.selectedFiles.length === 0) {
      this.noti.error("Debe subir al menos una imagen.", "Imágenes obligatorias", 5000);
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
        this.noti.error("Error subiendo imágenes", "Intente nuevamente", 5000);
        this.isLoading = false;
      }
    });
  }
  saveHistory(payload: TicketHistoryDTO) {
    this.ticketService.create(payload).subscribe({
      next: () => {
        this.noti.success("Estado actualizado", "Se registró el historial correctamente", 5000);
        this.router.navigate(['/VisualizacionTicket']);
      },
      error: () => {
        this.noti.error("Error", "No se pudo actualizar el ticket", 5000);
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
          { value: "PENDING", label: "Pendiente" }
        ];
        break;

      case "ASSIGNED":
        this.availableStates = [
          { value: "ASSIGNED", label: "Asignado" },
          { value: "IN_PROGRESS", label: "En Progreso" }
        ];
        break;

      case "IN_PROGRESS":
        this.availableStates = [
          { value: "IN_PROGRESS", label: "En Progreso" },
          { value: "RESOLVED", label: "Resuelto" }
        ];
        break;

      case "RESOLVED":
        this.availableStates = [
          { value: "RESOLVED", label: "Resuelto" },
          { value: "CLOSED", label: "Cerrado" }
        ];
        break;

      case "CLOSED":
        this.availableStates = [
          { value: "CLOSED", label: "Cerrado" }
        ];
        break;
    }
  }




 
  canSelectState(value: string) {
    return this.availableStates.some(s => s.value === value);
  }


}




