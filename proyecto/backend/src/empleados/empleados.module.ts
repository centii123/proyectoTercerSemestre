import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { empleados } from 'src/dataBase/empleados.entity';
import { EmpleadosController } from './empleados.controller';
import { EmpleadosService } from './empleados.service';
<<<<<<< HEAD
=======

>>>>>>> 8da4aaf091586346ccb6b7b8ed0effe861f5ad49

@Module({
  imports: [TypeOrmModule.forFeature([empleados])],
  controllers: [EmpleadosController],
  providers: [EmpleadosService],
})
export class EmpleadosModule {}
