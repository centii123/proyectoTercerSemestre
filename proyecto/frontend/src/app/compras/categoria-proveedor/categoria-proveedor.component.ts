import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoriaModel } from '../models/categoria.model';

@Component({
  selector: 'app-categoria-proveedor',
  templateUrl: './categoria-proveedor.component.html',
  styleUrls: ['./categoria-proveedor.component.css']
})
export class CategoriaProveedorComponent {
  update: boolean = false;
  private router= inject(Router);
  ngOnInit(): void {
 if (history.state.nombre_cat) {
      this.update = true
      this.updateCate= history.state
      console.log(history.state)
    }

  }
  constructor(private categoriaService: CategoriaService) {
    
  }
  updateCate: CategoriaModel ={
    id_cat: 0,
    especializacion: '',
    
   }

  registroC(registro: CategoriaModel) {
    const response = this.categoriaService.postAll(registro).subscribe(response => {

      console.log(response)
      this.router.navigate(['/compras/listar-c/']);
    })

  }
  registro: CategoriaModel = {
    id_cat: 0,
    especializacion: '',
  }

updateCategoria() {
  const response = this.categoriaService
    .cateUpdate(this.updateCate,this.updateCate.id_cat)
    .subscribe((response)=>{
      console.log(response)
    })
}

}
