import { Component } from '@angular/core';
import { CategoriasModel } from 'src/app/models/listar-categorias.model';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent {

  categorias: CategoriasModel[] = [];
    ngOnInit(): void {
      this.getCat()
    }
    constructor(private categoriasService: CategoriasService){

   }
   async getCat(){
    const response = this.categoriasService.getAll().subscribe((response) => {
      this.categorias = response;
    });
}
}
