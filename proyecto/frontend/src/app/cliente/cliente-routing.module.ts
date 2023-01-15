import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { FacturaComponent } from './factura/factura.component';
import { NavComponent } from './nav/nav.component';
import { VentaComponent } from './venta/venta.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: ClienteComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'venta', component: VentaComponent },
  { path: 'nav', component: NavComponent},
  { path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
