import { ProductSerchDTO } from './../DTO/ProductDTO.dto';
import { producto } from './../../dataBase/producto.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(producto) readonly producto:Repository<producto>){}

   async updateStockProuct():Promise<producto>{
      return
    }

    async serchProduct({producto}:ProductSerchDTO):Promise<producto>{
        return await this.producto.query(`SELECT * FROM producto where nombre_p like '%${producto}%' ORDER BY id_prod LIMIT 5 OFFSET 0`)
    }
}
