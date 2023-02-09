import { FacturaServices } from './../services/factura.services';
import { FacturaGeneDetalle, FacturaGeneDocumento } from './../models/facturaGene.entity';
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
  numDocumento:any
  catalogoProductos:ProductosModel[]=[]
  catalogoP:ProductosModel[]=[]
  facturaProductos:ProductosModel[]=[]
  facturaIngresarDetalle:FacturaGeneDetalle | undefined
  facturaIngresarDocumento:FacturaGeneDocumento | undefined
  precioTotal:number[]=[]
  serch:string=""
  cantidad:number | null=null
  cantidadUno:number | null=null
  productos: any | undefined
  valor:number=1
  suma:number=0
  tot=0
  private objeto: ProductosModel | null=null;
  constructor(private http:buscarProductos, private router:Router, private facturaCreate:FacturaServices){
  }
  
  ngOnInit():void{
    //this.busqueda()
  this.cliente()
  sessionStorage.removeItem('producto')
  sessionStorage.removeItem('Total')
  sessionStorage.removeItem('id_documento_venta')
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
    async sape() {
      sessionStorage.setItem('producto', JSON.stringify(this.facturaProductos));
      sessionStorage.setItem('Total', JSON.stringify(this.tot)); 
      //ingresar datos
      let productstorage= sessionStorage.getItem('producto')
      if(productstorage){
        let todo=JSON.parse(productstorage)
        for (let i = 0; i < todo.length; i++) {
          if(this.cedula_cliente){
          this.ingresarfactura(todo[i],this.cedula_cliente,i)
          }
          
        }

      }

      //funcion para redireccionar en angular
        this.router.navigate(['/ventas/documento/']);
      //window.open('/ventas/documento/','_blank')
      
      
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
        } 
      } 



      ingresarfactura(element:any,cedula:string,iteracion:number) {

        
        if(iteracion===0){
          this.facturaIngresarDocumento ={
            total: this.tot,
            cedula_cliente: cedula
          }
          
          console.log(this.facturaIngresarDocumento)
          this.facturaCreate.registrarFacturaDocumento(this.facturaIngresarDocumento).subscribe()
        }
          this.facturaCreate.obtenerultimodoc().subscribe(async e=>{
            
            this.numDocumento= await Object.values(e)[0]['id_documento_venta']
            this.facturaIngresarDetalle = {
              descripccion: "papa",
              cantidad: element.cantidades,
              tipo_producto: "me como",
              id_prod: element.id_prod,
              id_documento_venta:this.numDocumento
            };
            console.log(this.facturaIngresarDetalle)
            
            this.facturaCreate.registrarfacturaDetalle(this.facturaIngresarDetalle).subscribe()
            sessionStorage.setItem('id_documento_venta',this.numDocumento)
  
          })
        }

      }
    


    

