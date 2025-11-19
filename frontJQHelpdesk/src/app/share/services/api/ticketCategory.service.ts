import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { TicketCategoryModel } from '../../models/TicketCategoryModel';
import { environment } from '../../../../environments/environment.development';
import { TicketCategoryDTO } from '../../models/DTOs/TicketCategoryDTO';

@Injectable({
    providedIn: 'root'
})
export class TicketCategoryService extends BaseAPI<TicketCategoryModel, TicketCategoryDTO> {

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            environment.endPointTicketCategories);
    }
}