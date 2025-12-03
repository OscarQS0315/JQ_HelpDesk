import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../share/services/app/notification.service';
import { AuthenticationService } from '../../share/services/app/authentication.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserNotificationAppService } from '../../share/services/app/user-notification.service';
import { NotificationDTO } from '../../share/models/DTOs/NotificationDTO';
import { E_NotificationType } from '../../share/models/enums/notificationType.enum';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';


@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslocoModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  
})
export class Login implements OnInit {

  isLoginView = true;

  
  formulario!: FormGroup;

  
  fullName = '';
  registerEmail = '';
  registerPassword = '';
  confirmPassword = '';

  
  loginImage = '/Images/Background JQ.png';
  registerImage = "/Images/Background JQ.png";
  currentImage = this.loginImage;

  constructor(
    private fb: FormBuilder,
    private noti: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private translocoService: TranslocoService
  ) {
    this.buildForm();
  }

  
  ngOnInit() {
    this.setCurrentImage();
  }

  buildForm() {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  toggleView() {
    this.isLoginView = !this.isLoginView;
    this.setCurrentImage();
  }

  setCurrentImage() {
    this.currentImage = this.isLoginView ? this.loginImage : this.registerImage;
  }

  
  submitForm() {
    if (this.formulario.invalid) {
      this.noti.warning(
      this.translocoService.translate('IncompleteForm'),
      this.translocoService.translate('PleaseFillAllFields')
      );
      return;
    }

    const credentials = this.formulario.value;

    this.authService.loginUser(credentials).subscribe({
      next: (response) => {
        this.noti.success(this.translocoService.translate('Welcome'), this.translocoService.translate('SesionSuccess'), 3000);
        this.router.navigateByUrl('/Inicio');
      },
      error: (err) => {
        this.noti.error('Error', this.translocoService.translate('IncorrectCredentials'));
      }
    });
  }


  onRegister() {
    console.log('Register:', {
      fullName: this.fullName,
      registerEmail: this.registerEmail,
      registerPassword: this.registerPassword,
      confirmPassword: this.confirmPassword
    });
  }
}
