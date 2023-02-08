import { Component, OnInit } from '@angular/core';
import { ProductosModel } from '../models/productos.entity';
import { ClienteServices } from '../services/cliente.services';

@Component({
  selector: 'app-ventas-documento',
  templateUrl: './ventas-documento.component.html',
  styleUrls: ['./ventas-documento.component.css']
}) 
export class VentasDocumentoComponent implements OnInit{
  ngOnInit(): void {
    this.cliente()
    this.mostrar()
  }
  cedula_cliente:string | undefined
  nombre_cliente:string | undefined
  tot:any 
  facturaProductos:ProductosModel[]=[]
  constructor(private http:ClienteServices){}

  consultarCli(){
    const url = 'localhost:3000/factura'
   // this.http.registrarFactura().subscribe(e=>{console.log(e)})
  }
  //save localStoratge--
  total(){
    sessionStorage.setItem('total', JSON.stringify(this.tot));
  } 
  mostrar(){
    let  catalogo = sessionStorage.getItem('producto');
    if ( catalogo) {
      this. facturaProductos = JSON.parse( catalogo);
    } else {
      this. facturaProductos = [];
    }
     this.tot = sessionStorage.getItem('Total')
    if(this.tot){
      this.tot = JSON.parse(this.tot)
    }
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

}
