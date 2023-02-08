import { ClienteServices } from './../services/cliente.services';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas-cliente',
  templateUrl: './ventas-cliente.component.html',
  styleUrls: ['./ventas-cliente.component.css']
})
export class VentasClienteComponent {
  client:any
  valor:string | undefined
constructor(private clienteSer:ClienteServices){}

clienteBuscador(event:Event){
  let evento=event.target as HTMLInputElement
  this.valor= evento.value
  this.clienteSer.buscarCliente(this.valor).subscribe(e=>{
    this.client=e
  })
  
}
buscarCliente(event:Event){
  let evento = event.target as HTMLLIElement
  let valor=evento.value
  let string=JSON.stringify(valor)
  console.log(valor)
  this.clienteSer.buscarCliente(string).subscribe(e=>{
    console.log(e)
  })
}

}
