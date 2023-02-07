import { Component } from '@angular/core';
import { ProductosModel } from '../models/productos.entity';
import { buscarProductos } from '../services/productos.services';

@Component({
  selector: 'app-ventas-venta',
  templateUrl: './ventas-venta.component.html',
  styleUrls: ['./ventas-venta.component.css']
})
export class VentasVentaComponent {
  selectProducts:number[]=[]
  catalogoProductos:object[]=[]
  serch:string | undefined
  productos: any | undefined
  contador:any| undefined
  activador:boolean | undefined
  constructor(private http:buscarProductos){
  }
  
  ngOnInit():void{
    //this.busqueda()

  }

  busqueda(event:Event){
    //this.http.obtenerProducto(this.serch)
    this.serch=(<HTMLInputElement>event.target).value
    this.http.obtenerProducto(this.serch).subscribe(e=>{
      //console.log(Object.values(e).length) para transformar a un array
        this.productos=e
      })
  }

    //localStorage---guardar
    save(value: string) {
      const currentValue = localStorage.getItem('producto');
      localStorage.setItem('producto', currentValue ? `${currentValue}, ${value}` : value);
    }

    //seleccion de productos

    selectP(event:Event){
      let html=event.target as HTMLLIElement
      let valor=html.value
      this.selectProducts.push(valor)
    }

    obtenerProductos(){
      for (let i = 0; i < this.selectProducts.length; i++) {
        this.http.obtenerP1(this.selectProducts[i]).subscribe()
      }
      
    }
}
