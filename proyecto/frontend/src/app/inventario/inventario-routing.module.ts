import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './inventario.component';
import { ProductComponent } from './product/product.component';



const routes: Routes = [
{ path: '', component: InventarioComponent },
{ path: 'product', component: ProductComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }