import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { CategoriaModel } from '../compras/models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  destroy(id: Number) {
    throw new Error('Method not implemented.');
  }
  readonly Api_url: string = 'http://localhost:3000/categoria';

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<CategoriaModel[]> {
    const url = `${this.Api_url}`;
    const response = this.httpClient.get<CategoriaModel[]>(url);
    return response;
  }

  postAll(categoria:CategoriaModel):Observable<CategoriaModel>{
    const url = `${this.Api_url}`;
    const response = this.httpClient.post<CategoriaModel>(url, categoria)
    return response 
   }

   delete(id:number): Observable <any> {
    const url = `${this.Api_url}/${id}`;
    const Response = this.httpClient.delete<any>(url);
    return Response;
  }

   cateUpdate(nuevo: CategoriaModel,id:number): Observable<CategoriaModel>{
    const url = `${this.Api_url}/${id}`;
    const response = this.httpClient.put<CategoriaModel> (url,nuevo);
    return response;

  }
   

}
