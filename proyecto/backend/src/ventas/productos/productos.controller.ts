import { ProductSerchDTO } from './../DTO/ProductDTO.dto';
import { Query } from '@nestjs/common/decorators';
import { ProductsService } from './../services/products.service';
import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('productos')
export class ProductosController {
    constructor(public ProductsSer:ProductsService){}

    @Get()
    @UsePipes(ValidationPipe)
    buscar(@Query() producto:ProductSerchDTO){
        return this.ProductsSer.serchProduct(producto)
    }
}
