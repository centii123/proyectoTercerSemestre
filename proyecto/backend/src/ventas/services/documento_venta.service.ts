import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { documento_venta } from 'src/dataBase/documento_venta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentoVentaService {
    constructor(@InjectRepository(documento_venta) private documento:Repository<documento_venta>){}

    async getdoc():Promise<documento_venta[]>{
       return await this.documento.find()
    }
}
