import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

export interface BaseEntity {
  id?: number;
}

@Injectable({
  providedIn: 'root',
})
export class BaseAPI<TModel extends BaseEntity, TCreate = TModel> {

  urlAPI: string = environment.apiURL;

  constructor(
    protected http: HttpClient,
    @Inject(String) protected endpoint: string
  ) { }


  get(): Observable<TModel[]> {
    return this.http.get<TModel[]>(`${this.urlAPI}/${this.endpoint}`);
  }


  getMethod(
    action: string,
    options: { [param: string]: unknown } = {}
  ): Observable<TModel | TModel[]> {
    return this.http.get<TModel[]>(
      `${this.urlAPI}/${this.endpoint}/${action}`,
      options
    );
  }


  getById(id: number): Observable<TModel> {
    return this.http.get<TModel>(`${this.urlAPI}/${this.endpoint}/${id}`);
  }


  create(item: TCreate): Observable<TCreate> {
    return this.http.post<TCreate>(`${this.urlAPI}/${this.endpoint}`, item);
  }


  update(id: number, item: TCreate): Observable<TCreate> {
    return this.http.put<TCreate>(`${this.urlAPI}/${this.endpoint}/${id}`, item);
  }


  delete(id: number): Observable<TModel> {
    return this.http.delete<TModel>(`${this.urlAPI}/${this.endpoint}/${id}`);
  }
}
