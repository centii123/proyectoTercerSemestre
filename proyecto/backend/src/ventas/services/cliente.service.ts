import { ClienteRegister } from './../DTO/ClienteRegister.dto';
import { ClienteSerch } from './../DTO/ClienteSerch.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { cliente } from 'src/dataBase/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
    constructor(@InjectRepository(cliente) private cliente:Repository<cliente>){}

    async getCliente({cedula}: ClienteSerch):Promise<cliente[]>{
        return await this.cliente.query(`SELECT * FROM cliente where cedula_cliente like '%${cedula}%' ORDER BY cedula_cliente LIMIT 5 OFFSET 0`)
    }

    async ClienteRegis(clienteRegis:ClienteRegister[]){
        let cliente= await this.cliente.findOne({
            where:{
                cedula_cliente: clienteRegis['cedula_cliente']
            }
        })
         if(cliente){
            return new HttpException('el usuario ya existe',HttpStatus.FOUND)
          }
        
          let create=this.cliente.create(clienteRegis)
          return await this.cliente.save(create)
    }
}
