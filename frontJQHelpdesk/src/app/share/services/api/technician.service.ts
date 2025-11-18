import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { TechnicianModel } from '../../models/TechnicianModel';
import { environment } from '../../../../environments/environment.development';
import { TechnicianDTO } from '../../models/DTOs/TechnicianDTO';

@Injectable({
    providedIn: 'root'
})
export class TechnicianService extends BaseAPI<TechnicianModel, TechnicianDTO> {

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            environment.endPointTechnicians);
    }
    
}