import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegistroModel } from '../models/register.entity';
import { ClienteServices } from '../services/cliente.services';

@Component({
  selector: 'app-ventas-registro',
  templateUrl: './ventas-registro.component.html',
  styleUrls: ['./ventas-registro.component.css']
})
export class VentasRegistroComponent implements OnInit{
  data:RegistroModel ={
    cedula_cliente:'',
    nombres:'',
    apellido:'',
    email:''
  }
  ngOnInit(){
    //this.getRegistro();
  }

  constructor(private http:ClienteServices){}
  CrearCliente(){
    console.log(this.data)
    this.http.registrarCliente(this.data).subscribe(e=>{console.log(e)});
  } 


}
