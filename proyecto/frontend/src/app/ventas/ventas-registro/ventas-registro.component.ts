import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas-registro',
  templateUrl: './ventas-registro.component.html',
  styleUrls: ['./ventas-registro.component.css']
})
export class VentasRegistroComponent implements OnInit{
  ngOnInit(){
    console.log('hola')
  }
  readonly local = 'localhost:3000/cliente'
  constructor(private http:HttpClient){}
  getRegistro(){
    const data={
      cedula:String,
      nombres:String,
      apellido:String,
      email:String,
    }
    this.http.post(this.local,data).subscribe(e=>{console.log(e)});
  }
}
