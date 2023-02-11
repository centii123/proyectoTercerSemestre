import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }

  stock(id:number,data){
    let url=`http://localhost:3000/productos/${id}`
    this.http.put(url,data).subscribe()
  }

  actualizarStock(productos:any){
    let contenedor:any[]=[]
    let estructura:any
    for (let i = 0; i < productos.length; i++) {
      estructura={
        productosstock:productos[i].stock,
        id_prod:productos[i].id_prod,
        stock_actualizar: productos[i].cantidades
      }
      contenedor.push(estructura)
    }

    for (let i = 0; i < contenedor.length; i++) {
      let id=parseFloat(contenedor[i].id_prod)
      let stock=parseFloat(contenedor[i].stock_actualizar)
      let productosstock=parseFloat(contenedor[i].productosstock)
      let calc=productosstock - stock
      let final={
        stock:calc
      }
      console.log()
      console.log(stock,id)
      this.stock(id,final)
      
    }
  }
}
