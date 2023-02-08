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
  catalogoProductos:ProductosModel[]=[]
  catalogo:ProductosModel[]=[]
  facturaProductos:ProductosModel[]=[]
  serch:string=""
  cantidad:number | null=null
  cantidadUno:number | null=null
  productos: any | undefined
  valor:number=1
  suma:number=0
  private objeto: ProductosModel | null=null;
  constructor(private http:buscarProductos){
  }
  
  ngOnInit():void{
    //this.busqueda()

  }

  producto(cantidad:number,productos:ProductosModel){
   
    let precio=this.convertirnum(productos.precio_venta)
    
    this.objeto={
      id_prod:productos.id_prod,
      nombre_p:productos.nombre_p,
      stock:productos.stock,
      stock_min:productos.stock_min,
      cantidades:cantidad,
      precio_venta:precio,
      total:precio 
      
    }
    this.facturaProductos.push(this.objeto)
    console.log(this.facturaProductos)
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
      sessionStorage.setItem('producto', JSON.stringify(this.facturaProductos));
    //localStorage--mostrar
    }
 
    //seleccion de productos
    obtenerProductos(a:number){
      
      this.http.obtenerP1(a).subscribe(e => {
        let hola = this.facturaProductos.find(productopedido => {
          return productopedido.id_prod === a;
        });
        if (hola != undefined) {
          if(hola.cantidades && hola.total){
            hola.cantidades++
            
            hola.total=hola.precio_venta * hola.cantidades
          }

          
        } else {
          this.cantidad = 1;
          this.producto(this.cantidad, e);
          console.log("ingreso");
        }

      })

  }

    selectP(event:Event){
      let html=event.target as HTMLLIElement
      let valor=html.value
      this.selectProducts.push(valor)
      this.obtenerProductos(valor)
      this.serch=""
      
      
    }
    
    convertirnum(num:string){
      let numero=parseFloat(num)
      return numero
    }

    numas(event:Event){
      let target=event.target as HTMLInputElement
      let valor= target.value
      let num=this.convertirnum(valor)
      if(num>=1){
        let id_prod=target.parentElement?.parentElement?.querySelector('#idproduct')?.textContent
      let id_prodnum:number
      if(id_prod){
        id_prodnum=this.convertirnum(id_prod)
      }
      
      console.log(valor)
      

      let hola = this.facturaProductos.find(productopedido => {
        return productopedido.id_prod === id_prodnum;
      });
        if (hola != undefined) {
          if(hola.cantidades && hola.total){
            hola.cantidades= num
            hola.total=num * hola.precio_venta
          }

          
        }
      }
    }

    totales(){
      let suma=this.facturaProductos.length
      console.log(suma)
      

      
    }
}
