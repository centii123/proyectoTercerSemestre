import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosModel } from 'src/app/ventas/models/productos.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly Api_url: string='http://localhost:3000/inventario'
  constructor( private httpClient: HttpClient) {}

  producto(nuevo: object): Observable<ProductosModel>{
    const url = `${this.Api_url}`;
    const response = this.httpClient.post<ProductosModel> (url,nuevo);
    return response;

  }
}
