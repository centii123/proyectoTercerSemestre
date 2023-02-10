import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateEmpleadoModel, EmpleadoModel } from 'src/app/models/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor (private loginService: LoginService,private empleadosService: EmpleadosService,private router: Router) {
  }
  empleados: EmpleadoModel[] = []
  rol: number = 0;
  logeo = {
    email: '',
    clave: ''
  }

  login(){
    try {
      this.logearEmpleado();
      this.compareEmpleados();
    } catch (error) {
      console.log(error)
    }
  }
  logearEmpleado() {
    const response = this.empleadosService
      .getAll()
      .subscribe((response) => {
        console.log(response);
        this.empleados = response
     });
  }
  compareEmpleados(){
    this.empleados.forEach(empleado => {
      if (empleado.email === this.logeo.email && empleado.clave === this.logeo.clave) {
        this.rol = empleado.id_rol.id_rol
      }
    });
  }
  redirect(){
    if (this.rol === 1) {
      this.router.navigate(['/ventas/inicio'])
    } else if(this.rol === 2) {
      this.router.navigate(['/'])
    }else if(this.rol === 3){
      this.router.navigate(['/'])
    }else {
      this.router.navigate(['/login'])
    }
  }
}
