import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { TicketCategoryModel } from '../../models/TicketCategoryModel';
import { environment } from '../../../../environments/environment.development';
import { TicketCategoryDTO } from '../../models/DTOs/TicketCategoryDTO';
import { TicketValorationModel } from '../../models/TicketValorationModel';
import { ValorationDTO } from '../../models/DTOs/ValorationDTO';

@Injectable({
    providedIn: 'root'
})
export class TicketValorationService extends BaseAPI<TicketValorationModel, ValorationDTO> {

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            environment.endPointValorations);
    }
}