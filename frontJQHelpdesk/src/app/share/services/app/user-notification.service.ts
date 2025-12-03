import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { NotificationModel } from '../../models/NotificationModel';
import { NotificationDTO } from '../../models/DTOs/NotificationDTO';
import { UserNotificationService } from '../api/user-notification.service';
import { NotificationService } from './notification.service';
import { AuthenticationService } from './authentication.service';
import { E_Role } from '../../models/enums/role.enum';
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";

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

    public notifications = signal<NotificationModel[]>([]);


    readonly unreadCount = computed(() =>
        this.notifications().filter(n => !n.isRead).length
    );

    constructor(private userNoti: UserNotificationService, private transloco: TranslocoService) {

        this.loadNotifications();

        effect(() => {
            localStorage.setItem('notifications', JSON.stringify(this.notifications()));

        });
    };

    public loadNotifications() {
        const userNoti = this.userNoti.getUserNotifications(this.userId()!);
        userNoti.subscribe({
            next: (resp) => {
                console.log("API Response:", resp);
                console.log("Notifications:", resp.notifications);

                this.notifications.set(resp.notifications);
                console.log("Signal:", this.notifications());
            },
            error: (e) => console.error(e)
        });
        console.log("Notifications loaded in service. ", this.notifications());
    };

    newUserNotification(notification: NotificationDTO) {
        this.userNoti.create(notification).subscribe({
            next: (resp) => {

                this.notifications.update((list) =>
                    list.map(n => n.id === resp.id ? { ...n, isRead: true } : n)
                );
                this.noti.success(this.transloco.translate('OperationSuccesfull'), `Notificacion enviada`, 3000);
            },
            error: () => {
                this.noti.error(this.transloco.translate('OperationFailed'), "Error enviando notificación", 5000);
            },
        });
    };

    markAsRead(notificationId: number) {
        this.userNoti.putMethod(`mark-as-read/${notificationId}`).subscribe({
            next: (resp) => {
                this.noti.success(this.transloco.translate('OperationSuccesfull'), `Notificacion Vista`, 3000);
                this.loadNotifications();
            },
            error: () => {
                this.noti.error(this.transloco.translate('OperationFailed'), "Error marcando notificación como vista", 5000);
            },
        });
    };

    markAllAsRead() {
        this.userNoti.putMethod(`mark-all-as-read/${this.userId()}`).subscribe({
            next: (resp) => {
                this.noti.success(this.transloco.translate('OperationSuccesfull'), `Todas las notificaciones vistas`, 3000);
                this.loadNotifications();
            },
            error: () => {
                this.noti.error(this.transloco.translate('OperationFailed'), "Error marcando todas las notificaciones como vistas", 5000);
            },
        });
    };
}