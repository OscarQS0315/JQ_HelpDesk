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
import { CreateUserDTO } from '../../share/models/DTOs/UserDTO';
import { UserService } from '../../share/services/api/user.service';


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
  lastName = '';


  loginImage = '/Images/Background JQ.png';
  registerImage = "/Images/Background JQ.png";
  currentImage = this.loginImage;

  constructor(
    private fb: FormBuilder,
    private noti: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private translocoService: TranslocoService,
    private appNoti: UserNotificationAppService,
    private userService: UserService
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
      next: (response: any) => {
        // Guardar token y user en localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));

        this.noti.success(
          this.translocoService.translate('Welcome'),
          this.translocoService.translate('SesionSuccess'),
          3000
        );

        this.router.navigateByUrl('/Inicio');

        // Opcional: enviar notificación
        const notificationDTO = {
          title: 'Nuevo inicio de sesión',
          message: `Has iniciado sesión en tu cuenta.`,
          type: E_NotificationType.LOGIN,
          toUserId: response.user.id
        };
        this.appNoti.newUserNotification(notificationDTO);
      },
      error: (err) => {
        this.noti.error('Error', this.translocoService.translate('IncorrectCredentials'));
      }
    });
  }


  onRegister() {
  if (this.registerPassword !== this.confirmPassword) {
    this.noti.error(
      this.translocoService.translate('OperationFailed'),
      this.translocoService.translate('PasswordsDoNotMatch'),
      5000
    );
    return;
  }

  const newUser: CreateUserDTO = {
    name: this.fullName.trim(),
    lastName: this.lastName.trim(),
    email: this.registerEmail.trim(),
    password: this.registerPassword,
    role: 'USER'
  };


  this.userService.register(newUser).subscribe({
    next: (res) => {
      this.noti.success(
        this.translocoService.translate('OperationSuccesfull'),
        this.translocoService.translate('UserCreatedSuccessfully'),
        5000
      );

      // Opcional: enviar notificación interna al usuario recién creado
      const notificationDTO = {
        title: 'Cuenta creada',
        message: `Hola ${newUser.name}, tu cuenta ha sido creada exitosamente.`,
        type: E_NotificationType.LOGIN, // usa un tipo existente de tu enum
        toUserId: res.id
      };
      this.appNoti.newUserNotification(notificationDTO);

      this.router.navigate(['/Inicio']); // redirigir al login o dashboard
    },
    error: (err) => {
      this.noti.error(
        this.translocoService.translate('OperationFailed'),
        this.translocoService.translate('CouldNotCreateUser'),
        5000
      );
      console.error('Error al registrar usuario', err);
    },
  });
}


}
