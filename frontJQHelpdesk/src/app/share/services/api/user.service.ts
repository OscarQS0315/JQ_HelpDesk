import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { UserModel } from '../../models/UserModel';
import { environment } from '../../../../environments/environment.development';
import { CreateUserDTO, UserResponseDTO } from '../../models/DTOs/UserDTO';

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseAPI<UserModel> {

    constructor(httpClient: HttpClient) {
        super(httpClient, environment.endPointRegisterUser);
    }

    register(user: CreateUserDTO) {
        const url = `${environment.apiURL}/${environment.endPointRegisterUser}`;
        return this.http.post<UserResponseDTO>(url, user);
    }

}