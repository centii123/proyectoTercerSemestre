import { DetalleVentaService } from './../services/detalle_venta.service';
import { Documento_VentaDTO } from './../DTO/documento_venta.dto';
import { Body, UsePipes } from '@nestjs/common/decorators';
import { DocumentoVentaService } from './../services/documento_venta.service';

import { Controller, Get, Post, ValidationPipe } from '@nestjs/common';

@Controller('factura')
export class FacturaController {

    constructor(private documentoVenta:DocumentoVentaService, private detalleVenta:DetalleVentaService){}

    @Get()
    get(){
        let hola=this.documentoVenta.obtenerUlRegistro()
        return hola
    }

    @Post()
    post(@Body() datos){
        return this.detalleVenta.registrardetalle(datos)
    }
}
