import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ComprasModule } from './compras/compras.module';
//import { InventarioModule } from './inventario/inventario.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ComprasModule,
    //InventarioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
