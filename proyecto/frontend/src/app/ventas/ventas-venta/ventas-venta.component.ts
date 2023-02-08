import { FacturaGene } from './../models/facturaGene.entity';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosModel } from '../models/productos.entity';
import { buscarProductos } from '../services/productos.services';

@Component({
  selector: 'app-ventas-venta',
  templateUrl: './ventas-venta.component.html',
  styleUrls: ['./ventas-venta.component.css']
})
export class VentasVentaComponent {
  cedula_cliente:string | undefined
  nombre_cliente:string | undefined
  selectProducts:number[]=[]
  catalogoProductos:ProductosModel[]=[]
  catalogoP:ProductosModel[]=[]
  facturaProductos:ProductosModel[]=[]
  facturaIngresar:FacturaGene | undefined
  precioTotal:number[]=[]
  serch:string=""
  cantidad:number | null=null
  cantidadUno:number | null=null
  productos: any | undefined
  valor:number=1
  suma:number=0
  tot=0
  private objeto: ProductosModel | null=null;
  constructor(private http:buscarProductos, private router:Router){
  }
  
  ngOnInit():void{
    //this.busqueda()
  this.cliente()
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
    sape() {
      sessionStorage.setItem('producto', JSON.stringify(this.facturaProductos));
      sessionStorage.setItem('Total', JSON.stringify(this.tot)); 
      //funcion para redireccionar en angular
      this.router.navigate(['/ventas/documento/']);
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
      let suma:number[]=[]
      this.tot=0
        
        for (let item of this.facturaProductos.filter(i => i)) {
          let name = item?.total || 0;
          suma.push(name)
        }

        for (const i of suma) {
          this.tot=this.tot + i
        }
      return this.tot
      
    }

    cliente(){
     let storage = sessionStorage.getItem('ciente')
      if(storage){
          let client = JSON.parse( storage);
          console.log(client)
          this.cedula_cliente=client[0].cedula_cliente 
          console.log(this.cedula_cliente)
          this.nombre_cliente=`${client[0].nombres} ${client[0].apellido}`
        } else {
          let client = [];
        }
      } 

      /*ingresarfactura(factura: FacturaGene) {
        for(element => {
          this.facturaIngresar = {
            total: element.total,
            cedula_cliente: element.cedula_cliente,
            descripccion: 'hola',
            cantidad: element.cantidad,
            tipo_producto: 'Medicina',
            id_prod: element.id_prod
          };
        });
      }*/
    

}
    

