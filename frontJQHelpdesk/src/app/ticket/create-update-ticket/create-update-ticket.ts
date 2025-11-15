import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RouterModule } from "@angular/router";


interface Step {
  label: string;
  completed: boolean;
}

@Component({
  selector: "app-stepper",
  standalone: true,
  templateUrl: "./create-update-ticket.html",
  styleUrls: ["./create-update-ticket.css"],
  imports: [CommonModule, RouterModule]
})
export class CreateUpdateTicket {
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
  notification = { show: false, message: "" };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.watchFormChanges();
  }

  initForm() {
    this.profileForm = this.fb.group({
      fullName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      dob: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      address: [""],
      occupation: [""],
      bio: [""],
      website: ["", Validators.pattern("https?://.+")],
      socialMedia: [""]
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
}


