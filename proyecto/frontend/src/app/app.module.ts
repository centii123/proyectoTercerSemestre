import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentaComponent } from './cliente/venta/venta.component';
import { FacturaComponent } from './cliente/factura/factura.component';

@NgModule({
  declarations: [
    AppComponent,
    VentaComponent,
    FacturaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
