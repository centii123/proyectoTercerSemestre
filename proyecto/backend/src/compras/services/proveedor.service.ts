import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { proveedor } from 'src/dataBase/proveedor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedorService {
    constructor(@InjectRepository(proveedor) private proRepository: Repository<proveedor>){}

    async createProveedor(prov){
       const newPro = await this.proRepository.create(prov)
       return await this.proRepository.save(newPro)
    }

    //listar proveedores//
    async prover(){
        return this.proRepository.find()
    }

}
