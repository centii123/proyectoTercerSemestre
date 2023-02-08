import { Component } from '@angular/core';
import { ProductosModel } from '../models/productos.entity';
import { ClienteServices } from '../services/cliente.services';

@Component({
  selector: 'app-ventas-documento',
  templateUrl: './ventas-documento.component.html',
  styleUrls: ['./ventas-documento.component.css']
}) 
export class VentasDocumentoComponent {
  facturaProductos:ProductosModel[]=[]
  constructor(private http:ClienteServices){}
  consultarCli(){
    const url = 'localhost:3000/factura'
   // this.http.registrarFactura().subscribe(e=>{console.log(e)})
  }
  //save localStoratge--
  mostrar(){
    let  catalogo = sessionStorage.getItem('producto');
    if ( catalogo) {
      this. facturaProductos = JSON.parse( catalogo);
    } else {
      this. facturaProductos = [];
    }
  }

}
