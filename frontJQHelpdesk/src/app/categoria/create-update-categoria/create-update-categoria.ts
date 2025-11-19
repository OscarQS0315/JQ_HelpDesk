import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild, ElementRef, signal, computed } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { BreadcrumbBackComponent } from "../../share/components/breadcrumb-back/breadcrumb-back.component";
import { TicketCategoryModel } from "../../share/models/TicketCategoryModel";
import { TicketCategoryService } from "../../share/services/api/ticketCategory.service";
import { SpecialityAreaModel } from "../../share/models/SpecialityAreaModel";
import { CategoryEtiquetteModel } from "../../share/models/CategoryEtiquetteModel";
import { SpecialityService } from "../../share/services/api/Speciality.service";
import { etiquetteService } from "../../share/services/api/etiquette.service";
import { SlaService } from "../../share/services/api/sla.service";
import { SLAModel } from "../../share/models/SLAModel";
import { TicketCategoryDTO } from '../../share/models/DTOs/TicketCategoryDTO';
import { NotificationService } from '../../share/services/app/notification.service';
import { FileUploadService } from '../../share/services/api/file-upload.service';

interface SelectedSpeciality {
  id: number;
  name: string;
  description: string;
}
interface SelectedEtiquette {
  id: number;
  name: string;
  description: string;
}
@Component({
  selector: "app-stepper",
  standalone: true,
  templateUrl: "./create-update-categoria.html",
  styleUrls: ["./create-update-categoria.css"],
  imports: [CommonModule, RouterModule, BreadcrumbBackComponent, FormsModule, ReactiveFormsModule]
})


export class CreateUpdateCategoria {
  selectedSpecialities: SelectedSpeciality[] = [];
  selectedEtiquettes: SelectedEtiquette[] = [];
  dataSpeciality = signal<SpecialityAreaModel[]>([]);
  dataEtiquette = signal<CategoryEtiquetteModel[]>([]);
  searchQuerySpeciality = signal('');
  searchQueryEtiquette = signal('');
  today = new Date().toISOString().split('T')[0];

  slaList = signal<SLAModel[]>([]);
  selectedSLA: SLAModel | null = null;

  @ViewChild("fileInput") fileInput!: ElementRef;

  currentImageName: string | null = null;
  isCreate = true;
  categoryId: number | null = null;
  titleForm = 'Crear';
  profileForm!: FormGroup;

  currentFile: File | null = null;

  nameImage: string = 'image-no-found.jpg';
  previousImage: string | null = null;



  imagePreview: string | null = null;
  imageError: string | null = null;
  isLoading = false;
  completionPercentage = 0;


  constructor(private fb: FormBuilder, private router: Router,
    private SPService: SpecialityService,
    private ETService: etiquetteService,
    private route: ActivatedRoute,
    private sService: SlaService,
    private tCService: TicketCategoryService,
    private noti: NotificationService,
    private uploadService: FileUploadService) { }

  ngOnInit() {
    this.initForm();
    this.watchFormChanges();
    this.listSpecialities();
    this.listEtiquettes();
    this.listSLAs();

    this.route.params.subscribe(params => {
      const idParam = params['id'];
      this.categoryId = idParam ? +idParam : null;
      this.isCreate = this.categoryId === null;
      this.titleForm = this.isCreate ? 'Crear Categoría' : 'Actualizar Categoría';

      if (this.categoryId) {
        this.loadCategory(this.categoryId);
      }
    });

  }
  getSpecialityName(id: number): string {
    const found = this.dataSpeciality().find(s => s.id === id);
    return found ? found.name : '';
  }

  getEtiquetteName(id: number): string {
    const found = this.dataEtiquette().find(e => e.id === id);
    return found ? found.name : '';
  }

  loadCategory(id: number) {
    this.tCService.getById(id).subscribe((data: TicketCategoryDTO) => {
      this.profileForm.patchValue({
        titulo: data.name,
        descripcion: data.description,
        slaId: data.slaId,
        Fecha: this.today
      });
      this.imagePreview = data.imageUrl
        ? `http://localhost:3000/images/${data.imageUrl}`
        : null;
      this.previousImage = data.imageUrl || null;
      this.nameImage = data.imageUrl || 'image-no-found.jpg';



      this.SPService.get().subscribe((specialities: SpecialityAreaModel[]) => {
        this.dataSpeciality.set(specialities);
        this.selectedSpecialities = data.specialities
          .map(s => specialities.find(sp => sp.id === s.id))
          .filter((sp): sp is SpecialityAreaModel => !!sp);
      });

      this.ETService.get().subscribe((etiquettes: CategoryEtiquetteModel[]) => {
        this.dataEtiquette.set(etiquettes);
        this.selectedEtiquettes = data.categoryEtiquettes
          .map(e => etiquettes.find(et => et.id === e.id))
          .filter((et): et is CategoryEtiquetteModel => !!et);
      });
    });
  }



  listSLAs(): void {
    this.sService.get().subscribe((response: SLAModel[]) => {
      console.log("SLAs cargados:", response);
      this.slaList.set(response);
    });
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
      slaId: ["", [Validators.required]]
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

    this.currentFile = file;
    this.nameImage = file.name;
    this.imageError = null;

    const reader = new FileReader();
    reader.onload = () => {
        this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
}

  getSelectedSLA() {
    const id = Number(this.profileForm.get('slaId')?.value);
    return this.slaList().find(s => s.id === id);
  }


  resetForm() {
    this.profileForm.reset({
      Fecha: this.today
    });
    this.imagePreview = null;
    this.imageError = null;
    this.selectedSpecialities = [];
    this.selectedEtiquettes = [];
    this.searchQuerySpeciality.set('');
    this.searchQueryEtiquette.set('');
    this.noti.success('Operación Exitosa', 'Formulario reiniciado.', 5000);
  }

  onSubmit() {
  if (!this.profileForm.valid) {
    this.noti.error('Formulario inválido', 'Revise los campos marcados.', 5000);
    return;
  }

  this.isLoading = true;

  const saveCategoria = () => {
    const payload: TicketCategoryDTO = {
      name: this.profileForm.value.titulo,
      description: this.profileForm.value.descripcion,
      slaId: Number(this.profileForm.value.slaId),
      imageUrl: this.nameImage, // usar el nombre real del archivo
      SLA: this.getSelectedSLA()!,
      specialities: this.selectedSpecialities.map(s => ({ id: s.id })),
      categoryEtiquettes: this.selectedEtiquettes.map(e => ({ id: e.id }))
    };

    const request$ = this.isCreate
      ? this.tCService.create(payload)
      : this.tCService.update(this.categoryId!, payload);

    request$.subscribe({
      next: (data) => {
        this.isLoading = false;
        this.noti.success(
          this.isCreate ? 'Creación exitosa' : 'Actualización exitosa',
          `Categoría ${data.name} ${this.isCreate ? 'creada' : 'actualizada'}`,
          5000
        );
        this.router.navigate(['/ListadoCategoria']);
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);
        this.noti.error('Error', 'No se pudo guardar la categoría', 5000);
      }
    });
  };

  
  if (this.currentFile) {
    this.uploadService.upload(this.currentFile, this.previousImage)
      .subscribe({
        next: (data) => {
          this.nameImage = data.fileName;
          saveCategoria();
        },
        error: (err) => {
          this.isLoading = false;
          console.error(err);
          this.noti.error('Error', 'No se pudo subir la imagen', 5000);
        }
      });
  } else {
    
    this.nameImage = this.previousImage || 'image-no-found.jpg';
    saveCategoria();
  }
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

  toggleSpeciality(item: SpecialityAreaModel): void {
    const exists = this.selectedSpecialities.some(s => s.id === item.id);

    if (exists) {
      this.selectedSpecialities = this.selectedSpecialities.filter(s => s.id !== item.id);
    } else {
      this.selectedSpecialities.push(item);
    }
  }

  isSpecialitySelected(item: SpecialityAreaModel): boolean {
    return this.selectedSpecialities.some(s => s.id === item.id);
  }

  removeSpeciality(item: SelectedSpeciality): void {
    this.selectedSpecialities = this.selectedSpecialities.filter(s => s.id !== item.id);
  }

  toggleEtiquette(item: CategoryEtiquetteModel): void {
    const exists = this.selectedEtiquettes.some(e => e.id === item.id);

    if (exists) {
      this.selectedEtiquettes = this.selectedEtiquettes.filter(e => e.id !== item.id);
    } else {
      this.selectedEtiquettes.push(item);
    }
  }

  isEtiquetteSelected(item: CategoryEtiquetteModel): boolean {
    return this.selectedEtiquettes.some(e => e.id === item.id);
  }

  removeEtiquette(item: SelectedEtiquette): void {
    this.selectedEtiquettes = this.selectedEtiquettes.filter(e => e.id !== item.id);
  }
}


