import { Component } from '@angular/core';
import { ClienteServices } from '../services/cliente.services';

@Component({
  selector: 'app-ventas-documento',
  templateUrl: './ventas-documento.component.html',
  styleUrls: ['./ventas-documento.component.css']
})
export class VentasDocumentoComponent {
  constructor(private http:ClienteServices){}
  consultarCli(){
    const url = 'localhost:3000/factura'
   // this.http.registrarFactura().subscribe(e=>{console.log(e)})
  }
}
