import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClienteController } from './cliente/cliente.controller';
import { DetalleVentaController } from './detalle_venta/detalle_venta.controller';
import { DocumentoVentaController } from './documento_venta/documento_venta.controller';


@Module({
    imports:[TypeOrmModule.forFeature([])],
    controllers: [ClienteController, DetalleVentaController, DocumentoVentaController],
    providers:[]
})
export class VentasModule {}
