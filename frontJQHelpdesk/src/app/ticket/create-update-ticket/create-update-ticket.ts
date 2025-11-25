import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild, ElementRef, signal, computed } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { BreadcrumbBackComponent } from "../../share/components/breadcrumb-back/breadcrumb-back.component";
import { TicketCategoryModel } from "../../share/models/TicketCategoryModel";
import { TicketCategoryService } from "../../share/services/api/ticketCategory.service";
import { effect } from '@angular/core';
import { UserModel } from "../../share/models/UserModel";
import { UserService } from "../../share/services/api/user.service";
import { TicketDTO } from "../../share/models/DTOs/TicketDTO";
import { FileUploadService } from "../../share/services/api/file-upload.service";
import { TicketService } from "../../share/services/api/ticket.service";
import { NotificationService } from '../../share/services/app/notification.service';
import { forkJoin } from 'rxjs';
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";


interface Step {
  label: string;
  completed: boolean;
}

interface Category {
  id: number;
  name: string;
  parentCategory?: string;
  parentId?: number;
  description: string;
  icon: string;
}

@Component({
  selector: "app-stepper",
  standalone: true,
  templateUrl: "./create-update-ticket.html",
  styleUrls: ["./create-update-ticket.css"],
  imports: [CommonModule, RouterModule, BreadcrumbBackComponent, FormsModule, ReactiveFormsModule,TranslocoModule]
})
export class CreateUpdateTicket {

  userId = signal<number>(10);

  authUser = signal<UserModel | null>(null);

  ticketImages = signal<{ url: string }[]>([]);
  imagePreviews: string[] = [];
  currentFile?: File;
  selectedFiles: File[] = [];
  nameImage = '';

  data = signal<TicketCategoryModel[]>([]);
  selectedItem: TicketCategoryModel | null = null;
  searchQuery = signal('');
  today = new Date().toISOString().split('T')[0]; // yyyy-mm-dd

  steps: Step[] = [
    { label: "Pendiente", completed: false },
    { label: "En progreso", completed: false },
    { label: "Completado", completed: false },
    { label: "Confirmación", completed: false }
  ];

  currentStep = 0;

  goToStep(index: number): void {
    if (index <= this.currentStep || this.steps[index - 1]?.completed) {
      this.currentStep = index;
    }
  }

  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.steps[this.currentStep].completed = true;
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  @ViewChild("fileInput") fileInput!: ElementRef;

  profileForm!: FormGroup;
  imagePreview: string | null = null;
  imageError: string | null = null;
  isLoading = false;
  completionPercentage = 0;


  constructor(private fb: FormBuilder,
    private router: Router,
    private uploadService: FileUploadService,
    private TicketService: TicketService,
    private TCService: TicketCategoryService,
    private userService: UserService,
    private transloco: TranslocoService,
    private noti: NotificationService) {
    effect(() => {
      const id = this.userId();

      if (id !== null) {
        this.userService.getById(id).subscribe({
          next: (user) => {
            this.authUser.set(user);
            this.profileForm.patchValue({
              userId: user.id
            });
          },
          error: () => this.authUser.set(null)
        });
      }
    });

  }

  ngOnInit() {
    this.initForm();
    this.watchFormChanges();
    this.listCategories();

    effect(() => {
      const q = this.searchQuery().trim().toLowerCase();


      if (!this.selectedItem) return;


      if (q !== this.selectedItem.name.toLowerCase()) {
        this.selectedItem = null;
        this.profileForm.patchValue({ ticketCategoryId: null });
      }
    });
  }

  listCategories(): void {
    this.TCService.get().subscribe((response: TicketCategoryModel[]) => {
      console.log('Categorías cargadas:', response);
      this.data.set(response);
      this.buildHierarchy();
    });
  }

  categoriesHierarchy: TicketCategoryModel[][] = [];
  hoveredIndex: number = -1;

  buildHierarchy(): void {
    this.categoriesHierarchy = [this.data()];
  }


  hasChildren(category: Category): boolean {
    return this.data().some(c => c.id === category.id);
  }

  onHover(id: number): void {
    this.hoveredIndex = id;
  }

  onLeave(id: number): void {
    this.hoveredIndex = -1;
  }

  initForm() {
    this.profileForm = this.fb.group({
      titulo: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      Fecha: [this.today, [Validators.required]],
      prioridad: ["", [Validators.required]],
      storyPoints: [0],
      aceptanceCriteria: ["", [Validators.required]],
      comments: ["", [Validators.required]],
      userId: [null, [Validators.required]],
      ticketCategoryId: [null, [Validators.required]]
    });

  }

  watchFormChanges() {
    this.profileForm.valueChanges.subscribe(() => {
      this.calculateCompletion();
    });
  }

  calculateCompletion() {
    const controls = Object.keys(this.profileForm.controls);
    const filledControls = controls.filter(key => {
      const control = this.profileForm.get(key);
      return control?.value && !control.errors;
    });

    this.completionPercentage = Math.round((filledControls.length / controls.length) * 100);
  }

  onFileSelected(event: Event) {
    const files = (event.target as HTMLInputElement).files;

    if (!files || files.length === 0) return;


    Array.from(files).forEach(file => {
      this.handleFile(file);
    });
  }


  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer?.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach(file => {
      this.handleFile(file);
    });
  }


  handleFile(file: File | undefined) {
    if (!file) return;

    if (!file.type.match(/image\/(jpeg|png|webp)/)) {
      this.imageError = "Only JPEG, PNG and WebP images are allowed";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      this.imageError = "Image size should not exceed 5MB";
      return;
    }

    this.imageError = null;

    // Guardar archivo en la lista
    this.selectedFiles.push(file);

    // Generar preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreviews.push(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  resetForm() {
    const currentFecha = this.profileForm.get('Fecha')?.value;
    this.profileForm.reset({
      Fecha: currentFecha
    });
    this.imagePreview = null;
    this.imageError = null;
    this.noti.info(this.transloco.translate('OperationSuccesfull'),this.transloco.translate('FormReset'), 5000);
  }


  onSubmit() {
    this.profileForm.markAllAsTouched();

    if (this.profileForm.invalid) {
      this.noti.error(this.transloco.translate('NotiInvalid'),this.transloco.translate('NotiInvalidForm'), 5000);
      return;
    }

    this.isLoading = true;
    this.submitTicket();
  }
  removeImage(index: number) {
    this.selectedFiles.splice(index, 1);
    this.imagePreviews.splice(index, 1);
  }
  submitTicket() {
    const formValue = this.profileForm.value;


    const payload: TicketDTO = {
      title: formValue.titulo,
      description: formValue.descripcion,
      priority: formValue.prioridad.toUpperCase(),
      storyPoints: formValue.storyPoints,
      aceptanceCriteria: formValue.aceptanceCriteria,
      comments: formValue.comments,
      userId: formValue.userId,
      ticketCategoryId: formValue.ticketCategoryId,
      ticketImages: []
    };
    console.log(payload);

    const saveTicket = () => {
      this.TicketService.create(payload).subscribe({
        next: (resp) => {
          this.noti.success(this.transloco.translate('OperationSuccesfull'), `Ticket ${resp.title} ${this.transloco.translate('NotiCreated')}`, 5000);
          this.router.navigate(['/VisualizacionTicket']);
        },
        error: () => {
          this.noti.error(this.transloco.translate('OperationFailed'),this.transloco.translate('FailCreatingTicket'), 5000);
        },
        complete: () => this.isLoading = false
      });
    };


    if (this.selectedFiles.length === 0) {
      saveTicket();
      return;
    }
    this.isLoading = true;
    const uploadObservables = this.selectedFiles.map(file =>
      this.uploadService.upload(file, null)
    );
    forkJoin(uploadObservables).subscribe({
      next: (results: any[]) => {
        payload.ticketImages = results.map(r => ({ url: r.fileName }));
        saveTicket();
      },
      error: () => {
        this.noti.error(this.transloco.translate('OperationFailed'),this.transloco.translate('FailUploadingImage'), 5000);
        this.isLoading = false;
      }
    });
  }






  filteredData = computed(() => {
    const selected = this.selectedItem;
    const query = this.searchQuery().trim().toLowerCase();


    if (selected && query === selected.name.toLowerCase()) {
      return [selected];
    }


    return this.data().filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.categoryEtiquettes?.some(tag =>
        tag.name.toLowerCase().includes(query)
      )
    );
  });

  buildDTO(): TicketDTO {
    const form = this.profileForm.value;

    return {
      title: form.titulo,
      description: form.descripcion,
      priority: form.prioridad,
      storyPoints: form.storyPoints,
      aceptanceCriteria: form.aceptanceCriteria,
      comments: form.comments,
      userId: form.userId,
      ticketCategoryId: form.ticketCategoryId,
      ticketImages: this.ticketImages()
    };
  }



  selectItem(item: TicketCategoryModel): void {


    if (this.selectedItem?.id === item.id) {
      this.selectedItem = null;
      this.searchQuery.set("");
      return;
    }


    this.selectedItem = item;


    this.searchQuery.set(item.name);


    this.profileForm.patchValue({
      ticketCategoryId: item.id
    });
  }
  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/image-no-found.jpg';
  }

}


