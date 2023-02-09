import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

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
  categotia:'',
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
