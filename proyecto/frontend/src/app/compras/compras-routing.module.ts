import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaProveedorComponent } from './categoria-proveedor/categoria-proveedor.component';
import { ComprasComponent } from './compras.component';

const routes: Routes = [
{ path: '', component: ComprasComponent },
{ path: 'categoria',component: CategoriaProveedorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
