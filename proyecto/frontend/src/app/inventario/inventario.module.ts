import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario.component';
import { InventarioRoutingModule } from './inventario-routing.module';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ListarComponent } from './listar/listar.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { FormsModule } from '@angular/forms';
import { CategoryListPipe } from '../pipes/category-list.pipe';
import { productListPipe } from '../pipes/product-list.pipe';




@NgModule({
  declarations: [
    InventarioComponent,
    ProductComponent,
    NavComponent,
    FooterComponent,
    ListarComponent,
    CategoriasComponent,
    ListarCategoriasComponent,
    CategoryListPipe,
    productListPipe
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    FormsModule
  ]
})
export class InventarioModule { }
