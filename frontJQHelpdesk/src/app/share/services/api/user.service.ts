import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { UserModel } from '../../models/UserModel';
import { environment } from '../../../../environments/environment.development';
import { CreateUserDTO, UserResponseDTO } from '../../models/DTOs/UserDTO';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseAPI<UserModel> {

    private userUrl = `${environment.apiURL}/${environment.endPointUsers}`;

    constructor(httpClient: HttpClient) {
        super(httpClient, environment.endPointUsers);
    }

    register(user: CreateUserDTO) {
        const url = `${environment.apiURL}/${environment.endPointRegisterUser}`;
        return this.http.post<UserResponseDTO>(url, user);
    }

    getProfile(id: number): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.userUrl}/${id}`);
    }

}
