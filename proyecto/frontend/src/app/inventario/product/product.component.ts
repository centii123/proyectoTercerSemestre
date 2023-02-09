import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoriasModel } from 'src/app/models/listar-categorias.model';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 ngOnInit(): void{
 }

constructor (private productService: ProductService){
}
nuevo={
  nombre:'',
  compra:'',
  venta:'',
  stock:'',
  minimo:'',
  categorias:'',
}
producto(){
  try{
    this.nuevoproducto()
  } catch(error){
    console.log(error)
  }
}
  nuevoproducto() {
    const response = this.productService
      .producto(this.nuevo)
      .subscribe((response)=>{
        console.log(response)
      })
  }
}
