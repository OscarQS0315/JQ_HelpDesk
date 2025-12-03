import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { NotificationModel } from '../../models/NotificationModel';
import { NotificationDTO } from '../../models/DTOs/NotificationDTO';
import { UserNotificationService } from '../api/user-notification.service';
import { NotificationService } from './notification.service';
import { AuthenticationService } from './authentication.service';
import { E_Role } from '../../models/enums/role.enum';

@Injectable({
    providedIn: 'root',
})
export class UserNotificationAppService {

    authService = inject(AuthenticationService);
    readonly currentUser = this.authService.user;
    readonly isAuthenticated = computed(() => this.authService.authenticated());
    readonly userId = computed(() => this.currentUser()?.id);
    readonly role = computed(() => {
        const user = this.currentUser();
        return user?.role as E_Role | undefined;
    });

    readonly isAdmin = computed(() => this.role() === E_Role.ADMIN);
    readonly isUser = computed(() => this.role() === E_Role.USER);
    readonly isTechnician = computed(() => this.role() === E_Role.TECHNICIAN);




    private noti = inject(NotificationService)

    private notifications = signal<NotificationModel[]>([]);


    readonly unreadCount = computed(() =>
        this.notifications().filter(n => !n.isRead).length
    );

    constructor(private userNoti: UserNotificationService) {
        this.loadNotifications();
        effect(() => {
            localStorage.setItem('notifications', JSON.stringify(this.notifications()));
        });
    };

    private loadNotifications(){
        const userNoti = this.userNoti.getUserNotifications(this.userId()!);
        userNoti.subscribe({
            next: (response: NotificationModel[]) => {
                const notifications = Array.isArray(response) ? response : [response];
                this.notifications.set(notifications);
            },
            error: (error) => {
                console.error("Error al cargar notificaciones:", error);
            }
        });
    };

    newUserNotification (notification: NotificationDTO) {
        
    }
}