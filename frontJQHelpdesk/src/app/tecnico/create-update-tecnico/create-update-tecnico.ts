import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-registration',
  templateUrl: './create-update-tecnico.html',
  styleUrls: ['./create-update-tecnico.css'],
  standalone: false,
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

  countries = [
    { code: 'IN', name: 'India' },
    { code: 'US', name: 'United States' }
  ];

  states: { code: string, name: string }[] = [];

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
    const today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.maxDate = today || '';
  }

  ngOnInit() {
    this.initForm();
    this.watchNameChanges();
  }

  initForm() {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(20)]],
      firstName: ['', [Validators.required, Validators.maxLength(30)]],
      lastName: ['', Validators.maxLength(30)],
      gender: [''],
      dob: [''],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      countryCode: ['+91'],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address1: ['', [Validators.required, Validators.maxLength(100)]],
      address2: ['', Validators.maxLength(100)],
      country: ['', Validators.required],
      state: [''],
      zipCode: ['', Validators.maxLength(20)],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
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

  resetForm() {
    this.registrationForm.reset();
    this.imagePreview = null;
    this.userInitials = '';
    this.registrationForm.patchValue({ countryCode: '+91' });
  }
}