import { Component, inject, effect, runInInjectionContext, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserNotificationAppService } from '../../share/services/app/user-notification.service';
import { AuthenticationService } from '../../share/services/app/authentication.service';
import { E_Role } from '../../share/models/enums/role.enum';
import { UserModel } from '../../share/models/UserModel';
import { E_NotificationType } from '../../share/models/enums/notificationType.enum';

interface Notification {
  id: number;
  title: string;
  message: string;
  type: string;
  timestamp: Date;
  read: boolean;
  avatar?: string;
  senderName?: UserModel;
  receiverName?: UserModel;
}

@Component({
  selector: 'app-notification-inbox',
  templateUrl: './listado-notificaciones.html',
  styleUrls: ['./listado-notificaciones.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ListadoNotificaciones {

  E_NotificationType = E_NotificationType;

  authService = inject(AuthenticationService);
  readonly currentUser = this.authService.user;
  readonly isAuthenticated = computed(() => this.authService.authenticated());

  readonly role = computed(() => {
    const user = this.currentUser();
    return user?.role as E_Role | undefined;
  });

  readonly isAdmin = computed(() => this.role() === E_Role.ADMIN);
  readonly isUser = computed(() => this.role() === E_Role.USER);
  readonly isTechnician = computed(() => this.role() === E_Role.TECHNICIAN);


  notifications: Notification[] = [];
  filteredNotifications: Notification[] = [];
  selectedCategory: E_NotificationType = E_NotificationType.ALL;
  selectedNotification: Notification | null = null;

  private appNoti = inject(UserNotificationAppService);

  constructor() {
    this.appNoti.loadNotifications();
    console.log("Notifications loaded in component effect. ", this.appNoti.notifications());
    effect(() => {

      const raw = this.appNoti.notifications();

      if (!Array.isArray(raw)) return;

      this.notifications = raw.map(n => ({
        id: n.id!,
        title: n.title ?? "Sin título",
        message: n.message,
        type: n.type as E_NotificationType,
        timestamp: new Date(n.createdAt),
        read: n.isRead,
        avatar: `http://localhost:3000/images/${n.fromUser?.profileImage}`,
        senderName: n.fromUser,
        receiverName: n.toUser
      }));

      this.filterNotifications();
    });
  }

  filterNotifications() {
    this.filteredNotifications =
      this.selectedCategory === E_NotificationType.ALL
        ? this.notifications
        : this.notifications.filter(n => n.type === this.selectedCategory);
        console.log('Category actual:', this.selectedCategory);
  }


  markAllAsRead() {
    this.appNoti.markAllAsRead();
    this.notifications.forEach(n => (n.read = true));
    this.filterNotifications();
  }

  openNotificationDetail(notification: Notification) {
    this.selectedNotification = notification;
    notification.read = true;
    this.appNoti.markAsRead(notification.id);
    this.filterNotifications();
  }

  closeDetail() {
    this.selectedNotification = null;
  }
}
