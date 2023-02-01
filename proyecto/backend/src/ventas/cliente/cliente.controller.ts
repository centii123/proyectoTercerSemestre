import { ClienteSerch } from './../DTO/ClienteSerch.dto';
import { Controller, Get } from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';
import { Query, UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';

@Controller('cliente')
export class ClienteController {

    constructor(public clientService:ClienteService){}

    @Get()
    @UsePipes(ValidationPipe)
    get(@Query() cedula:ClienteSerch){
        let datos=this.clientService.getCliente(cedula)
        return datos
    }
}
