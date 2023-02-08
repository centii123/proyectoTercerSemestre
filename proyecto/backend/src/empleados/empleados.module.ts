/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { empleados } from 'src/dataBase/empleados.entity';
import { EmpleadosController } from './empleados.controller';
import { EmpleadosService } from './empleados.service';


@Module({
  imports: [TypeOrmModule.forFeature([empleados])],
  controllers: [EmpleadosController],
  providers: [EmpleadosService],
})
export class EmpleadosModule {}
