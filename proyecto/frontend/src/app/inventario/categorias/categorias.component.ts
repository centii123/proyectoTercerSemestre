import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasModel, CreateCategoriasModel } from 'src/app/models/listar-categorias.model';
import { CategoriasService } from 'src/app/services/categorias.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categoriasNuevo: CreateCategoriasModel = {
    nombre_cat: ''
  }
  categoriasEdit: CategoriasModel = {
    nombre_cat: '',
    id_cat: 0
  }
  update: boolean = false
  categorias: CategoriasModel[] = []

  constructor (private categoriasService: CategoriasService, private router: Router){}

  ngOnInit(): void {
    if (history.state.id_cat) {
      this.update = true
      delete history.state.navigationId
      console.log(history.state)
      this.updateCategoria= history.state
    }
  }

  nuevaCategoria() {
    const response = this.categoriasService
      .store(this.categoriasNuevo)
      .subscribe((response)=>{
        console.log(response)
        this.router.navigate(["inventario/listar"])
      })
  }
  updateCategoria() {
    this.categoriasEdit.nombre_cat = this.categoriasNuevo.nombre_cat
    const response = this.categoriasService.
    update(this.categoriasEdit,this.categoriasEdit.id_cat)
      .subscribe((response)=>{
        console.log(response)
        this.router.navigate(["inventario/listar"])
      })
  }
}

