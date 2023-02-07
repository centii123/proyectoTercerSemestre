import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { proveedor } from 'src/dataBase/proveedor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedorService {
    constructor(@InjectRepository(proveedor) private proRepository: Repository<proveedor>){}

    //registrar proveedores//
    async createProveedor(prov){
       const newPro = await this.proRepository.create(prov)
       return await this.proRepository.save(newPro)
    }

    //listar proveedores//
    async prover(){
        return this.proRepository.find()
    }

    //eliminar proveedores//
    deleteProv(id_prov: number){
        return this.proRepository.delete({id_prov})
    }

    //actualizar proveedor//
    async updateProv(id_prov: number, prov1){
        return this.proRepository.update({id_prov}, prov1)
     }

}
