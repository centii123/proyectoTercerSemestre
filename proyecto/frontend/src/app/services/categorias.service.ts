import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriasModel, CreateCategoriasModel } from '../models/listar-categorias.model';
import { CreatelistarModel } from '../models/listar.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  readonly Api_url: string = 'http://localhost:3000/categorias';
  constructor(private httpClient: HttpClient) { }

  store(categorias: CreateCategoriasModel):Observable<CreateCategoriasModel>{
    const url = `${this.Api_url}`;
    const response = this.httpClient.post<CreateCategoriasModel>(url, categorias);
    return response;
  }

  update(categorias: CategoriasModel,id: number):Observable<CategoriasModel>{
    const url = `${this.Api_url}/${id}`;
    const response = this.httpClient.post<CategoriasModel>(url, categorias);
    return response;
  }

  getAll(): Observable<CategoriasModel[]> {
    const url = `${this.Api_url}`;
    const response = this.httpClient.get<CategoriasModel[]>(url);
    return response;
  }

}
