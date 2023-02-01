import { ClienteRegister } from './../DTO/ClienteRegister.dto';
import { ClienteSerch } from './../DTO/ClienteSerch.dto';
import { Controller, Get, Post } from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';
import { Query, UsePipes, Body } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';

@Controller('cliente/cliente')
export class ClienteController {

    constructor(public clientService:ClienteService){}

    @Get()
    @UsePipes(ValidationPipe)
    get(@Query() cedula:ClienteSerch){
        let datos=this.clientService.getCliente(cedula)
        return datos
    }

    @Post()
    enviar(@Body() datosCliente:ClienteRegister[]){
        return this.clientService.ClienteRegis(datosCliente)
    }

}
