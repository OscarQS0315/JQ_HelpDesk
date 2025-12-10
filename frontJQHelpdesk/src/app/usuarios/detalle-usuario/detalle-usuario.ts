import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { UserService } from "../../share/services/api/user.service";
import { ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../../share/services/app/authentication.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./detalle-usuario.html",
  styleUrls: ["./detalle-usuario.css"],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class DetalleUsuario implements OnInit {

  isEditMode = false;
  profileForm: FormGroup;

  userProfile = {
    Name: "",
    lastName: "",
    email: "",
    phone: "",
    imageUrl: ""
  };

  userIdFromRoute!: number;
  loggedUserId!: number;
  isOwner: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {
    this.profileForm = this.fb.group({
      Name: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern("^\\+?[1-9]\\d{1,14}$")]]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.loadUser(id);
    }


    this.userIdFromRoute = Number(this.route.snapshot.paramMap.get('id'));
    this.loggedUserId = this.authService.user()?.id ?? 0;
    this.isOwner = this.loggedUserId === this.userIdFromRoute;
    this.loadUser(this.userIdFromRoute);
  }

  loadUser(id: number): void {
    this.userService.getProfile(id).subscribe({
      next: (user) => {
        this.userProfile = {
          Name: `${user.name ?? ""}`,
          lastName: `${user.lastName ?? ""}`,
          email: user.email ?? "",
          phone: user.cellphone ?? "",
          imageUrl: user.profileImage ?? "https://via.placeholder.com/150"
        };

        this.profileForm.patchValue({
          Name: this.userProfile.Name,
          lastName: this.userProfile.lastName,
          email: this.userProfile.email,
          phone: this.userProfile.phone
        });
      },
      error: (err) => console.error("Error cargando usuario", err)
    });
  }



  initializeForm(): void {
    this.profileForm.patchValue({
      Name: this.userProfile.Name,
      lastName: this.userProfile.lastName,
      email: this.userProfile.email,
      phone: this.userProfile.phone
    });
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    if (this.isEditMode) {
      this.initializeForm();
    }
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.userProfile.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3";
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.userProfile = {
        ...this.userProfile,
        ...this.profileForm.value
      };
      this.isEditMode = false;
    }
  }

  cancelEdit(): void {
    this.isEditMode = false;
    this.initializeForm();
  }
}
