import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioService } from './inventario.service';
import { InventarioController } from './inventario.controller';
import { producto } from 'src/dataBase/producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([producto])],
  providers: [InventarioService],
  controllers: [InventarioController],
})
export class InventarioModule {}
