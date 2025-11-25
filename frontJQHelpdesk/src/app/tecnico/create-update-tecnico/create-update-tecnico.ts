import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { SpecialityService } from '../../share/services/api/Speciality.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { NotificationService } from '../../share/services/app/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicianService } from '../../share/services/api/technician.service';
import { Subject } from 'rxjs';
import { TechnicianModel } from '../../share/models/TechnicianModel';
import { TechnicianDTO } from '../../share/models/DTOs/TechnicianDTO';
import { FileUploadService } from '../../share/services/api/file-upload.service';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';



@Component({
  selector: 'app-user-registration',
  templateUrl: './create-update-tecnico.html',
  styleUrls: ['./create-update-tecnico.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    TranslocoModule
  ],
  providers: [DatePipe]
})
export class CreateUpdateTecnico implements OnInit {

  registrationForm!: FormGroup;
  isCreate = true;
  isSubmitting = false;
  isEditMode = false;
  showPassword = false;
  maxDate!: string;
  userInitials = '';
  titleForm = 'Crear';
  specialities: Array<{ id: number; name: string }> = [];
  userId: number | null = null;
  technicianId: number | null = null;
  currentFile?: File;
  preview = '';
  imageError: string | null = null;
  imagePreview: string | null = null;
  nameImage = 'image-no-found.jpg';
  previousImage: string | null = null;



  states: { code: string, name: string }[] = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private datePipe: DatePipe,
    private specialityService: SpecialityService,
    private noti: NotificationService,
    private uploadService: FileUploadService,
    private route: ActivatedRoute,
    private transloco: TranslocoService,
    private tService: TechnicianService) {
    const today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.maxDate = today || '';

  }

  ngOnInit() {
    this.initForm();
    this.watchNameChanges();
    this.loadSpecialities();
    this.fixSpecialitiesType();

    this.route.params.subscribe((params) => {
      this.technicianId = params['id'] ?? null
      this.isCreate = this.technicianId === null
      this.titleForm = this.isCreate ? 'Crear' : 'Actualizar'
      if (this.technicianId) {
        this.tService.getById(this.technicianId).subscribe((data) => this.patchFormValues(data))
      }
    })
  }

  initForm() {
    this.registrationForm = this.fb.group({
      fname: ['', [Validators.required, Validators.maxLength(20)]],
      firstLastName: ['', [Validators.required]],
      secLastName: [''],
      gender: [''],
      dob: [''],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['+506'],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{8,10}$/)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      specialities: this.fb.control<number[]>([], {
        nonNullable: true,
        validators: [(ctrl) => ctrl.value.length > 0 ? null : { required: true }]
      }),

    }, { validators: this.passwordMatchValidator });
  }

  private patchFormValues(data: TechnicianModel) {
    this.registrationForm.patchValue({
      id: data.id,
      fname: data.user.name,
      firstLastName: data.user.lastName,
      gender: data.user.genre ?? '',
      dob: data.user.dob ? new Date(data.user.dob).toISOString().substring(0, 10) : '',
      email: data.user.email,
      countryCode: '+506',
      mobile: data.user.cellphone,
      password: '',
      confirmPassword: '',
      specialities: data.specialities?.map(s => s.id) ?? [],
    });
    this.userId = data.userId;
    // Actualiza la imagen previa
    this.imagePreview = data.user.profileImage
      ? `http://localhost:3000/images/${data.user.profileImage}`
      : `http://localhost:3000/images/image-no-found.jpg`;

    this.nameImage = data.user.profileImage || 'image-no-found.jpg';
    this.previousImage = data.user.profileImage;
  }

  fixSpecialitiesType() {
    const ctrl = this.registrationForm.get('specialities');

    ctrl?.valueChanges.subscribe(val => {
      if (Array.isArray(val)) {
        const converted = val.map(v => Number(v));
        if (JSON.stringify(val) !== JSON.stringify(converted)) {
          ctrl.setValue(converted, { emitEvent: false });
        }
      }
    });
  }

  loadSpecialities() {
    this.specialityService.get().subscribe({
      next: (data) => {
        this.specialities = data;
      },
      error: (err) => {
        console.error('Error loading specialities', err);
      }
    });
  }



  getSpecialityName(id: number) {
    return this.specialities?.find(x => x.id === id)?.name || '';
  }

  removeSpeciality(id: number) {
    const control = this.registrationForm.get('specialities');
    const current = control?.value ?? [];

    const updated = current.filter((x: number) => x !== id);

    control?.setValue(updated);
    control?.markAsDirty();
  }

  watchNameChanges() {
    this.registrationForm.get('firstLastName')?.valueChanges.subscribe(() => {
      this.updateInitials();
    });
    this.registrationForm.get('secLastName')?.valueChanges.subscribe(() => {
      this.updateInitials();
    });
  }

  updateInitials() {
    const firstName = this.registrationForm.get('firstLastName')?.value || '';
    const lastName = this.registrationForm.get('secLastName')?.value || '';
    this.userInitials = `${firstName.charAt(0) || ''}${lastName.charAt(0) || ''}`;
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { passwordMismatch: true };
  }

  onCountryChange() {
    const country = this.registrationForm.get('country')?.value;
    this.states = this.getStatesForCountry(country);
    this.registrationForm.patchValue({ state: '' });
  }

  getStatesForCountry(countryCode: string) {
    const stateMap: Record<string, Array<{ code: string; name: string }>> = {
      'IN': [
        { code: 'MH', name: 'Maharashtra' },
        { code: 'DL', name: 'Delhi' }
      ],
      'US': [
        { code: 'NY', name: 'New York' },
        { code: 'CA', name: 'California' }
      ]
    };
    return stateMap[countryCode] || [];
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      this.currentFile = file;
      const reader = new FileReader();
      this.nameImage = file.name;
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.nameImage = file.name;
      };
      reader.readAsDataURL(file);
    } else {
      alert('File size should not exceed 2MB');
    }
  }

  getPasswordStrengthClass() {
    const password = this.registrationForm.get('password')?.value || '';
    if (!password) return '';

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*]/.test(password);

    const strength = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChars]
      .filter(Boolean).length;

    if (strength <= 2) return 'strength-weak';
    if (strength === 3) return 'strength-medium';
    return 'strength-strong';
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.isSubmitting = true;
      console.log(this.registrationForm.value);
      this.submitTecnico();
    } else {
      console.error(this.transloco.translate('NotiInvalidForm'));
      this.noti.error(this.transloco.translate('NotiInvalid'), this.transloco.translate('NotiInvalidForm'), 5000);
    }
  }

  submitTecnico() {
    this.registrationForm.markAllAsTouched();

    if (this.registrationForm.invalid) {
      this.noti.error(this.transloco.translate('NotiInvalid'), this.transloco.translate('NotiInvalidForm'), 5000);
      return;
    }

    const formValue = this.registrationForm.value;
    const payloadSpecialities = formValue.specialities?.map((id: number) => ({ id })) ?? [];

    const payload: TechnicianDTO = {
      name: formValue.fname,
      lastName: formValue.firstLastName + ' ' + (formValue.secLastName || ''),
      email: formValue.email,
      profileImage: this.nameImage,
      role: 'TECHNICIAN',
      status: true,
      cellphone: formValue.mobile,
      dob: new Date(formValue.dob),
      genre: formValue.gender,
      userTechnician: {
        status: 'AVAILABLE',
        workload: 0
      },
      specialities: payloadSpecialities
    };

    if (formValue.password?.trim()) {
      payload.password = formValue.password;
    }

    const saveTecnico = () => {
      const request$ = this.isCreate
        ? this.tService.create(payload)
        : this.tService.update(this.userId!, payload);

      request$.subscribe({
        next: (data) => {
          this.noti.success(
            this.isCreate
              ? this.transloco.translate('NotiCreateTechnician')
              : this.transloco.translate('NotiUpdateTechnician'),
            `${this.transloco.translate('Technician')} ${data.name} ${this.isCreate ? this.transloco.translate('NotiCreated') : this.transloco.translate('NotiUpdated')}`,
            5000
          );
          this.router.navigate(['/Listado']);
        },
        error: (err) => {
          this.noti.error(this.transloco.translate('Error'), this.transloco.translate('NotiInvalidForm'), 5000);
          console.error(err);
        }
      });
    };

    if (this.currentFile) {

      this.uploadService.upload(this.currentFile, this.previousImage)
        .subscribe(data => {
          this.nameImage = data.fileName;
          payload.profileImage = this.nameImage;
          saveTecnico();
        });
    } else {
      saveTecnico();
    }
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

  resetForm() {
    this.registrationForm.reset();
    this.imagePreview = null;
    this.userInitials = '';
    this.registrationForm.patchValue({ countryCode: '+506' });
  }
}