/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { InventarioService } from './inventario.service';

@Controller('inventario')
export class InventarioController {
  constructor(private productoService: InventarioService) {}

  @Post()
  registrar(@Body() newProducto) {
    return this.productoService.createProducto(newProducto);
  }

  @Get()
  getProduct() {
    return this.productoService.getProduct();
  }


  @Delete(':id')
  deleteProducto(@Param('id', ParseIntPipe) id: number) {
    this.productoService.deleteProduct(id);
  }
}
