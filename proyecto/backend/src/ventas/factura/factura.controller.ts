
import { Detalle_ventaDTO } from './../DTO/Detalle_venta.dto';
import { DetalleVentaService } from './../services/detalle_venta.service';
import { Body} from '@nestjs/common/decorators';
import { DocumentoVentaService } from './../services/documento_venta.service';

import { Controller, Post } from '@nestjs/common';

@Controller('factura')
export class FacturaController {

    datosregisterdocumento;
    datosregisterdetalleVenta:Detalle_ventaDTO;
    constructor(private documentoVenta:DocumentoVentaService, private detalleVenta:DetalleVentaService){}

    @Post()
    async post(@Body() datos):Promise<string>{
        this.datosregisterdocumento={
            total:datos['total'],
            cedula_cliente:datos['cedula_cliente']
        }
        this.datosregisterdetalleVenta={
            descripccion:datos['descripccion'],
            cantidad:datos['cantidad'],
            tipo_producto:datos['tipo_producto'],
            id_prod:datos['id_prod'],
        }

            await this.documentoVenta.registrardoc(this.datosregisterdocumento)
            await this.detalleVenta.registrardetalle(this.datosregisterdetalleVenta)

        return 'registrado'
    }
}
