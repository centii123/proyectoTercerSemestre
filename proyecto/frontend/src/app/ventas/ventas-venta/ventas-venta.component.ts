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
  serch:string=""
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
    save() {
      const currentValue = sessionStorage.getItem('producto');
      sessionStorage.setItem('producto', JSON.stringify(this.catalogoProductos));
    }
 
    //seleccion de productos

    selectP(event:Event){
      let html=event.target as HTMLLIElement
      let valor=html.value
      this.selectProducts.push(valor)
      this.obtenerProductos(valor)
      this.serch=""
    }

    obtenerProductos(a:number){
        this.http.obtenerP1(a).subscribe(e=>{
          this.catalogoProductos.push(e)
          console.log(this.catalogoProductos)
        })

      
    }
}
