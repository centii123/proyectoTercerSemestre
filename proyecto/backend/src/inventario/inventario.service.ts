/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { producto } from 'src/dataBase/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InventarioService {
  constructor(
    @InjectRepository(producto)
    private productoRepository: Repository<producto>,
  ) {}

  async createProducto(producto) {
    const newInventario = await this.productoRepository.create(producto);
    return await this.productoRepository.save(newInventario);
  }

  deleteProduct(id_prod: number) {
    return this.productoRepository.delete({ id_prod });
  }

  async getProduct() {
    const hol = await this.productoRepository.query(`select p.nombre_p, p.stock, p.precio_venta, c.nombre_cat from producto as p, categorias as c where c.id_cat = p.id_cat `)
    return hol 
  }
}
