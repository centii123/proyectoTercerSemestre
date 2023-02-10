import { Pipe, PipeTransform } from '@angular/core';
import { CategoriasModel } from '../models/listar-categorias.model';


@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {
  
  transform(value: CategoriasModel[], query: string): CategoriasModel[] {
    if(query === '' || query === undefined) {
      return value;
    }
     value = value.filter(categorias => categorias.nombre_cat.toLowerCase().indexOf(query.toLowerCase()) != -1)
     return value  
  }

}