import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductosModel } from '../models/productos.entity'

@Injectable({
    providedIn: 'root'
})
export class buscarProductos{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    readonly api = 'localhost:3000/cliente'
    constructor(private http:HttpClient){}
        obtenerProducto(id_prod:string){
            const url = `${this.api}`;
            return this.http.get(url)
        }
}