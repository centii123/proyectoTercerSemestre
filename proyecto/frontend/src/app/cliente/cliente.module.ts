import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { NavComponent } from './nav/nav.component';
import { FacturaComponent } from './factura/factura.component';
import { VentaComponent } from './venta/venta.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    ClienteComponent,
    NavComponent,
    FacturaComponent,
    VentaComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
