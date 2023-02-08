import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoriaModel } from '../compras/models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  readonly Api_url: string = 'http://localhost:3000/categoria';

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<CategoriaModel[]> {
    const url = `${this.Api_url}`;
    const response = this.httpClient.get<CategoriaModel[]>(url);
    return response;
  }
  
}
