import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proveedorModel } from '../models/proveedores.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  readonly Api_url: string = '/proveedores';
  constructor(private httpClient : HttpClient) {
    
   }
   getAll():Observable<proveedorModel[]>{4
    const url = `${this.Api_url}`;
    const response = this.httpClient.get<proveedorModel[]>(url)
    return response 
   }
}
