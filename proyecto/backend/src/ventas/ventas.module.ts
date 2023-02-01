import { empleados } from './../dataBase/empleados.entity';
import { producto } from './../dataBase/producto.entity';
import { detalle_venta } from './../dataBase/detalle_venta.entity';
import { cliente } from './../dataBase/cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClienteController } from './cliente/cliente.controller';

import { documento_venta } from 'src/dataBase/documento_venta.entity';
import { ClienteService } from './services/cliente.service';
import { FacturaController } from './factura/factura.controller';
import { ProductosController } from './productos/productos.controller';


@Module({
    imports:[TypeOrmModule.forFeature([cliente,documento_venta,detalle_venta,producto,empleados])],
    controllers: [ClienteController, FacturaController, ProductosController],
    providers:[ClienteService]
})
export class VentasModule {}
