import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { FacturaComponent } from './factura/factura.component';
import { VentaComponent } from './venta/venta.component';

const routes: Routes = [
  { path: '', component: ClienteComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'venta', component: VentaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
