import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriasModel } from '../models/listar-categorias.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  readonly Api_url: string = 'http://localhost:3000/categorias';

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<CategoriasModel[]> {
    const url = `${this.Api_url}`;
    const response = this.httpClient.get<CategoriasModel[]>(url);
    return response;
  }

}
