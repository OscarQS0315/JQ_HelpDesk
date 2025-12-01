import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild, ElementRef, signal } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BreadcrumbBackComponent } from "../../share/components/breadcrumb-back/breadcrumb-back.component";
import { TicketService } from "../../share/services/api/ticket.service";
import { FileUploadService } from "../../share/services/api/file-upload.service";
import { UserService } from "../../share/services/api/user.service";
import { NotificationService } from '../../share/services/app/notification.service';
import { TicketDTO } from "../../share/models/DTOs/TicketDTO";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";
import { forkJoin } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { UserModel } from "../../share/models/UserModel";
@Component({
  selector: "app-update-ticket",
  standalone: true,
  templateUrl: "./update-ticket.html",
  styleUrls: ["./update-ticket.css"],
  imports: [CommonModule, RouterModule, BreadcrumbBackComponent, ReactiveFormsModule, TranslocoModule]
})
export class UpdateTicket implements OnInit {

  // ------------------------- SIGNALS -------------------------
  user = signal<UserModel | null>(null);
  authUser = signal<any | null>(null);

  // ------------------------- IMAGENES -------------------------
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  imageError: string | null = null;

  @ViewChild("fileInput") fileInput!: ElementRef;

  // ------------------------- FORM -------------------------
  profileForm!: FormGroup;
  today = new Date().toISOString().split('T')[0];
  isLoading = false;

  ticketId: number = 0;
 
  availableStates: string[] = [];

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private uploadService: FileUploadService,
    private userService: UserService,
    private noti: NotificationService,
    private transloco: TranslocoService,
    private route: ActivatedRoute
  ) {
    this.ticketId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.initForm();

    this.loadTicket(); // <-- PARA RELLENAR EL FORM MÁS ADELANTE

  }

  // --------------------------------------------------------------------------------------------------------------------
  //                                                  FORMULARIO
  // --------------------------------------------------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------------------------------------------------
  //                                                  CARGAR USUARIO
  // --------------------------------------------------------------------------------------------------------------------


  // --------------------------------------------------------------------------------------------------------------------
  //                                       CARGAR DATOS DEL TICKET (PENDIENTE)
  // --------------------------------------------------------------------------------------------------------------------
  loadTicket() {
  this.ticketService.getById(this.ticketId).subscribe(ticket => {

    this.profileForm.patchValue({
      titulo: ticket.title,
      descripcion: ticket.description,
      Fecha: this.formatDate(ticket.createdAt), // 👈 CONVERSIÓN NECESARIA
      status: ticket.status,
      observacion: ""
    });

    this.user.set(ticket.user);
    this.setAvailableStates(ticket.status);
  });
}


  formatDate(dateStr: Date): string {
  const date = new Date(dateStr);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${date.getFullYear()}-${month}-${day}`;
}


  // --------------------------------------------------------------------------------------------------------------------
  //                                                  MANEJO IMÁGENES
  // --------------------------------------------------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------------------------------------------------
  //                                               SUBMIT: UPDATE TICKET
  // --------------------------------------------------------------------------------------------------------------------
  onSubmit() {
    if (this.profileForm.invalid) {
      this.noti.error("Formulario inválido", "Debe completar todos los campos obligatorios", 5000);
      return;
    }

    // 🚨 VALIDAR: al menos una imagen obligatoria
    if (this.imagePreviews.length === 0) {
      this.noti.error("Debe subir al menos una imagen", "Suba una imagen obligatoria", 5000);
      return;
    }

    this.isLoading = true;
    this.submitTicketUpdate();
  }


  submitTicketUpdate() {
    const form = this.profileForm.value;

    const payload: TicketDTO = {
      title: form.titulo,
      description: form.descripcion,
      priority: undefined,     // ya no se edita aquí
      storyPoints: undefined,  // ya no se edita
      aceptanceCriteria: undefined,
      comments: form.observacion, // observación obligatoria
      userId: this.authUser()?.id,
      ticketCategoryId: undefined,
      status: form.status,
      ticketImages: []
    };

    // ------------------ ¿Hay imágenes nuevas? ------------------
    if (this.selectedFiles.length > 0) {
      const uploads = this.selectedFiles.map(file => this.uploadService.upload(file, null));
      forkJoin(uploads).subscribe({
        next: (results: any[]) => {
          payload.ticketImages = results.map(r => ({ url: r.fileName }));
          this.updateTicket(payload);
        },
        error: () => {
          this.noti.error("Error", "No se pudieron subir las imágenes", 5000);
          this.isLoading = false;
        }
      });

    } else {
      this.updateTicket(payload);
    }
  }

  updateTicket(payload: TicketDTO) {
    // ⚠ Aquí va tu endpoint de UPDATE real:
    /*
    this.ticketService.update(ticketId, payload).subscribe(...)
    */

    console.log("Payload enviado (UPDATE):", payload);

    this.noti.success("Actualizado", "El ticket fue actualizado correctamente", 5000);
    this.isLoading = false;
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

  // determina las reglas permitidas dependiendo del estado actual
  setAvailableStates(current: string) {
    switch (current) {
      case "PENDING":
        this.availableStates = ["Pendiente"];
        break;

      case "ASSIGNED":
        this.availableStates = ["Asignado", "En Progreso"];
        break;

      case "IN_PROGRESS":
        this.availableStates = ["En Progreso", "Resuelto"];
        break;

      case "RESOLVED":
        this.availableStates = ["Resuelto", "Cerrado"];
        break;

      case "CLOSED":
        this.availableStates = ["Cerrado"];
        break;
    }
  }

  // para bloquear radiobuttons inválidos
  canSelectState(state: string) {
    return this.availableStates.includes(state);
  }


}




