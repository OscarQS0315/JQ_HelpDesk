import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild, ElementRef, signal, computed } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { BreadcrumbBackComponent } from "../../share/components/breadcrumb-back/breadcrumb-back.component";
import { TicketCategoryModel } from "../../share/models/TicketCategoryModel";
import { TicketCategoryService } from "../../share/services/api/ticketCategory.service";
import { SpecialityAreaModel } from "../../share/models/SpecialityAreaModel";
import { CategoryEtiquetteModel } from "../../share/models/CategoryEtiquetteModel";
import { SpecialityService } from "../../share/services/api/Speciality.service";
import { etiquetteService } from "../../share/services/api/etiquette.service";


@Component({
  selector: "app-stepper",
  standalone: true,
  templateUrl: "./create-update-categoria.html",
  styleUrls: ["./create-update-categoria.css"],
  imports: [CommonModule, RouterModule, BreadcrumbBackComponent, FormsModule, ReactiveFormsModule]
})
export class CreateUpdateCategoria {
  dataSpeciality = signal<SpecialityAreaModel[]>([]);
  selectedItemSpeciality: SpecialityAreaModel | null = null;
  dataEtiquette = signal<CategoryEtiquetteModel[]>([]);
  selectedItemEtiquette: CategoryEtiquetteModel | null = null;
  searchQuerySpeciality = signal('');
  searchQueryEtiquette = signal('');
  today = new Date().toISOString().split('T')[0]; // yyyy-mm-dd


  @ViewChild("fileInput") fileInput!: ElementRef;

  profileForm!: FormGroup;
  imagePreview: string | null = null;
  imageError: string | null = null;
  isLoading = false;
  completionPercentage = 0;
  notification = { show: false, message: "" };

  constructor(private fb: FormBuilder, private router: Router,
    private SPService: SpecialityService,
    private ETService: etiquetteService) { }

  ngOnInit() {
    this.initForm();
    this.watchFormChanges();
    this.listSpecialities();
    this.listEtiquettes();
  }

  listSpecialities(): void {
    this.SPService.get().subscribe((response: SpecialityAreaModel[]) => {
      console.log('Especialidades cargadas:', response);
      this.dataSpeciality.set(response);
    });
  }

  listEtiquettes(): void {
    this.ETService.get().subscribe((response: CategoryEtiquetteModel[]) => {
      console.log('Etiquetas cargadas:', response);
      this.dataEtiquette.set(response);
    });
  }

  categoriesHierarchy: TicketCategoryModel[][] = [];
  hoveredIndex: number = -1;


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
      prioridad: ["", [Validators.required]]
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
    const file = (event.target as HTMLInputElement).files?.[0];
    this.handleFile(file);
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
    const file = event.dataTransfer?.files[0];
    this.handleFile(file);
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
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  resetForm() {
    this.profileForm.reset();
    this.imagePreview = null;
    this.imageError = null;
    this.showNotification("Form has been reset");
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        this.showNotification("Profile updated successfully");
      }, 1500);
    }
  }

  showNotification(message: string) {
    this.notification = { show: true, message };
    setTimeout(() => {
      this.notification = { show: false, message: "" };
    }, 3000);
  }


  filteredDataSpeciality = computed(() => {
    const query = this.searchQuerySpeciality().toLowerCase();

    return this.dataSpeciality().filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  filteredDataEtiquette = computed(() => {
    const query = this.searchQueryEtiquette().toLowerCase();

    return this.dataEtiquette().filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });


  selectItemSpeciality(item: SpecialityAreaModel): void {
    this.selectedItemSpeciality = item;
  }
  selectItemEtiquette(item: CategoryEtiquetteModel): void {
    this.selectedItemEtiquette = item;
  }
}


