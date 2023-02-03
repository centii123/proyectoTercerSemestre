import { Documento_VentaDTO } from './../DTO/documento_venta.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { documento_venta } from 'src/dataBase/documento_venta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentoVentaService {
    constructor(@InjectRepository(documento_venta) private documento:Repository<documento_venta>){}

    async registrardoc(docume):Promise<documento_venta[]>{
       let create= await this.documento.create(docume)
       return await this.documento.save(create)
    }

    async obtenerUlRegistro(){
       return await this.documento.query('SELECT max(id_documento_venta) as id_documento_venta from documento_venta')
    }
}
