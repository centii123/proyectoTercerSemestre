import { Component } from '@angular/core';
import { ProductosModel } from '../models/productos.entity';
import { buscarProductos } from '../services/productos.services';

@Component({
  selector: 'app-ventas-venta',
  templateUrl: './ventas-venta.component.html',
  styleUrls: ['./ventas-venta.component.css']
})
export class VentasVentaComponent {
  serch:string | undefined
  productos: any | undefined
  contador:any| undefined
  constructor(private http:buscarProductos){}
  
  ngOnInit():void{
    //this.busqueda()
  }

  busqueda(event:Event){
    //this.http.obtenerProducto(this.serch)
    this.serch=(<HTMLInputElement>event.target).value
    this.http.obtenerProducto(this.serch).subscribe(e=>{
        this.productos=e
        
      })
    
    
  }
}
