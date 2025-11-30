import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Notification {
  id: number;
  title: string;
  message: string;
  type: string;
  timestamp: Date;
  read: boolean;
  avatar?: string;
}

@Component({
  selector: 'app-notification-inbox',
  templateUrl: './listado-notificaciones.html',
  styleUrls: ['./listado-notificaciones.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ListadoNotificaciones implements OnInit {
  notifications: Notification[] = [];
  filteredNotifications: Notification[] = [];
  selectedCategory: string = 'all';
  selectedNotification: Notification | null = null;

  ngOnInit() {
    this.notifications = [
      {
        id: 1,
        title: "System Update Available",
        message: "A new system update is available. Please review and install.",
        type: "update",
        timestamp: new Date(),
        read: false,
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80"
      },
      {
        id: 2,
        title: "New Message from John",
        message: "Hey, just checking in on the project progress...",
        type: "message",
        timestamp: new Date(Date.now() - 3600000),
        read: false,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80"
      },
      {
        id: 3,
        title: "Security Alert",
        message: "Unusual login attempt detected from new device",
        type: "alert",
        timestamp: new Date(Date.now() - 7200000),
        read: true,
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80"
      }
    ];
    this.filterNotifications();
  }

  filterNotifications() {
    this.filteredNotifications = this.selectedCategory === 'all' 
      ? this.notifications
      : this.notifications.filter(notification => notification.type === this.selectedCategory);
  }

  markAllAsRead() {
    this.notifications.forEach(notification => notification.read = true);
    this.filterNotifications();
  }

  openNotificationDetail(notification: Notification) {
    this.selectedNotification = notification;
    notification.read = true;
  }

  closeDetail() {
    this.selectedNotification = null;
  }
}
