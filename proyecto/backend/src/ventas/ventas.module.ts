import { empleados } from './../dataBase/empleados.entity';
import { producto } from './../dataBase/producto.entity';
import { detalle_venta } from './../dataBase/detalle_venta.entity';
import { cliente } from './../dataBase/cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClienteController } from './cliente/cliente.controller';
import { DetalleVentaController } from './detalle_venta/detalle_venta.controller';
import { DocumentoVentaController } from './documento_venta/documento_venta.controller';
import { documento_venta } from 'src/dataBase/documento_venta.entity';


@Module({
    imports:[TypeOrmModule.forFeature([cliente,documento_venta,detalle_venta,producto,empleados])],
    controllers: [ClienteController, DetalleVentaController, DocumentoVentaController],
    providers:[]
})
export class VentasModule {}
