import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { UserModel } from '../../models/UserModel';
import { environment } from '../../../../environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseAPI<UserModel> {

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            environment.endPointUsers);
    }
}