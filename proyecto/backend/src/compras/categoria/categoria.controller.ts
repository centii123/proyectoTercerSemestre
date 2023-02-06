import { Controller, Post, Body } from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';

@Controller('categoria')
export class CategoriaController {

    constructor(private catService: CategoriaService){}

    @Post()
    createCat(@Body() newCat){
      return  this.catService.createCategoria(newCat)

    }
}
