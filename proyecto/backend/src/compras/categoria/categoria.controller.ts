import { Controller, Post, Body, Get } from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';

@Controller('categoria')
export class CategoriaController {

    constructor(private catService: CategoriaService){}

    //insertar categorias//
    @Post()
    createCat(@Body() newCat){
      return  this.catService.createCategoria(newCat)
    }

    //listar categorias//
    @Get()
    getCate(){
      return this.catService.getCate();
    }
    

}
