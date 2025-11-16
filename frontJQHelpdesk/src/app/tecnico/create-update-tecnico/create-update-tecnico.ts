import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { SpecialityService } from '../../share/services/api/Speciality.service';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-user-registration',
  templateUrl: './create-update-tecnico.html',
  styleUrls: ['./create-update-tecnico.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [DatePipe]
})
export class CreateUpdateTecnico implements OnInit {
  registrationForm!: FormGroup;
  isEditMode = false;
  isSubmitting = false;
  imagePreview: string | null = null;
  showPassword = false;
  maxDate!: string;
  userInitials = '';
  imageError: string | null = null;
  specialities: Array<{ id: number; name: string }> = [];

  countries = [
    { code: 'IN', name: 'India' },
    { code: 'US', name: 'United States' }
  ];

  states: { code: string, name: string }[] = [];

  constructor(private fb: FormBuilder, private datePipe: DatePipe, private specialityService: SpecialityService) {
    const today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.maxDate = today || '';
  }

  ngOnInit() {
  this.initForm();
  this.watchNameChanges();
  this.loadSpecialities();
  this.fixSpecialitiesType();
}

  initForm() {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(20)]],
      firstName: ['', [Validators.required]],
      lastName: [''],
      gender: [''],
      dob: [''],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['+506'],
      mobile: ['', [Validators.required]],
      address1: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      specialities: this.fb.control<number[]>([], { nonNullable: true }),
    });
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
    this.registrationForm.get('firstName')?.valueChanges.subscribe(() => {
      this.updateInitials();
    });
    this.registrationForm.get('lastName')?.valueChanges.subscribe(() => {
      this.updateInitials();
    });
  }

  updateInitials() {
    const firstName = this.registrationForm.get('firstName')?.value || '';
    const lastName = this.registrationForm.get('lastName')?.value || '';
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
    if (file && file.size <= 2 * 1024 * 1024) { // 2MB limit
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
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
      this.resetForm();
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
    this.registrationForm.patchValue({ countryCode: '+91' });
  }
}