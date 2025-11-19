import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { TicketModel } from '../../models/TicketModel';
import { environment } from '../../../../environments/environment.development';
import { TicketDTO } from '../../models/DTOs/TicketDTO';

@Injectable({
    providedIn: 'root'
})
export class TicketService extends BaseAPI<TicketModel, TicketDTO> {

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            environment.endPointTickets);
    }
}