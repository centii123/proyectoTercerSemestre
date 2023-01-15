import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasComponent } from './compras.component';
import { CategoriaProveedorComponent } from './categoria-proveedor/categoria-proveedor.component';


@NgModule({
  declarations: [
    ComprasComponent,
    CategoriaProveedorComponent
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule
  ]
})
export class ComprasModule { }
