import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { NotificationModel } from '../../models/NotificationModel';
import { environment } from '../../../../environments/environment.development';
import { NotificationDTO } from '../../models/DTOs/NotificationDTO';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
    providedIn: 'root'
})
export class UserNotificationService extends BaseAPI<NotificationModel, NotificationDTO> {

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            environment.endPointNotifications);
    }
    getUserNotifications(userId: number): Observable<{ notifications: NotificationModel[] }> {
        return this.http.get<{ notifications: NotificationModel[] }>(
            `${this.urlAPI}/${this.endpoint}/${userId}`
        );
    }


}