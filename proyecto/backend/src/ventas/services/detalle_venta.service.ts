import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { detalle_venta } from 'src/dataBase/detalle_venta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetalleVentaService {
    constructor( @InjectRepository(detalle_venta) private detalle:Repository<detalle_venta> ){}

    async get(){
        return await this.detalle.find
    }


}
