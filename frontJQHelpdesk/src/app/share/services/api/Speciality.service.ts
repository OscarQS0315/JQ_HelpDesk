import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { environment } from '../../../../environments/environment.development';
import { SpecialityAreaModel } from '../../models/SpecialityAreaModel';

@Injectable({
    providedIn: 'root'
})
export class SpecialityService extends BaseAPI<SpecialityAreaModel> {

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            environment.endPointSpecialities);
    }
}