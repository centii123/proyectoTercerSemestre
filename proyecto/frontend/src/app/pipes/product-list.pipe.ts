import { Pipe, PipeTransform } from '@angular/core';
import { listarModel } from '../models/listar.model';


@Pipe({
  name: 'productList'
})
export class productListPipe implements PipeTransform {
  
  transform(value: listarModel[], query: string): listarModel[] {
    if(query === '' || query === undefined) {
      return value;
    }
     value = value.filter(listar => listar.nombre_p.toLowerCase().indexOf(query.toLowerCase()) != -1)
     return value  
  }

}