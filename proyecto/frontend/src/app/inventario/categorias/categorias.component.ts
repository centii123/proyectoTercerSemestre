import { Component } from '@angular/core';
import { CategoriasModel } from 'src/app/models/listar-categorias.model';
import { CategoriasService } from 'src/app/services/categorias.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  categoriasNuevo: CategoriasModel = {
    nombre_cat: '',
    id_cat: 0
  }

  categorias: CategoriasModel[] = []
  router: any;
  constructor (private categoriasService: CategoriasService){}

}

