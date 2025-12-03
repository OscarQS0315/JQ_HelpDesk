import { Component, inject } from '@angular/core';
import { UserNotificationAppService } from '../../share/services/app/user-notification.service';
@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

  notiApp = inject(UserNotificationAppService);

  constructor() {
    this.notiApp.loadNotifications();

  }
}
