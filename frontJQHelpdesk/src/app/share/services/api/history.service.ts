import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { TicketModel } from '../../models/TicketModel';
import { environment } from '../../../../environments/environment.development';
import { TicketDTO } from '../../models/DTOs/TicketDTO';
import { TicketHistoryModel } from '../../models/TicketHistoryModel';

@Injectable({
    providedIn: 'root'
})
export class HistoryService extends BaseAPI<  TicketHistoryModel, TicketDTO> {

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            environment.endPointHistory);
    }
}