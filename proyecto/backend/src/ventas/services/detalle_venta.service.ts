import { Detalle_ventaDTO } from './../DTO/Detalle_venta.dto';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { detalle_venta } from 'src/dataBase/detalle_venta.entity';
import { Repository } from 'typeorm';
import { DocumentoVentaService } from './documento_venta.service';

@Injectable()
export class DetalleVentaService {
    constructor( @InjectRepository(detalle_venta) private detalle:Repository<detalle_venta>, private documentoVentaService:DocumentoVentaService ){}

    async get(){
        return await this.detalle.find()
    }

    async registrardetalle(datos:Detalle_ventaDTO){
       let idUltimo= await this.documentoVentaService.obtenerUlRegistro();
       let num=idUltimo[0]['id_documento_venta']
       console.log(num)

        let objeto:Detalle_ventaDTO={
            descripccion:datos.descripccion,
            cantidad:datos.cantidad,
            iva_producto:datos.iva_producto,
            tipo_producto:datos.tipo_producto,
            id_prod:datos.id_prod,
            id_documento_venta:num
        }
        let crear= await this.detalle.create(objeto)
        return await this.detalle.save(crear)
    }


}
