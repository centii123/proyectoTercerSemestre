import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { EmpleadosRoutingModule } from './empleados-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class EmpleadosModule { }
