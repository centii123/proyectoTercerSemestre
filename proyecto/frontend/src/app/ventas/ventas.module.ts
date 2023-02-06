import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
import { VentasNavComponent } from './layouts/ventas-nav/ventas-nav.component';
import { VentasFooterComponent } from './layouts/ventas-footer/ventas-footer.component';
import { VentasVentaComponent } from './ventas-venta/ventas-venta.component';
import { VentasDocumentoComponent } from './ventas-documento/ventas-documento.component';
import { VentasInicioComponent } from './ventas-inicio/ventas-inicio.component';
import { VentasRegistroComponent } from './ventas-registro/ventas-registro.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VentasComponent,
    VentasNavComponent,
    VentasFooterComponent,
    VentasVentaComponent,
    VentasDocumentoComponent,
    VentasInicioComponent,
    VentasRegistroComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    FormsModule
  ]
})
export class VentasModule { }
