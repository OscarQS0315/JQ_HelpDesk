import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPI } from './base-api';
import { environment } from '../../../../environments/environment.development';
import { CategoryEtiquetteModel } from '../../models/CategoryEtiquetteModel';

@Injectable({
    providedIn: 'root'
})
export class etiquetteService extends BaseAPI<CategoryEtiquetteModel> {

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            environment.endPointEtiquettes);
    }
}