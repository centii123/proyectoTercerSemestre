/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EmpleadosService } from './services/empleados.service';
import { Repository } from 'typeorm';
import { empleados } from 'src/dataBase/empleados.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('empleados')
export class EmpleadosController {
  constructor(private empleadosService: EmpleadosService,
    @InjectRepository(empleados) private empleadosRepository: Repository<empleados>
    ) {}

  @Post()
  registrar(@Body() newEmpleados) {
    return this.empleadosService.createEmpleados(newEmpleados);
    //console.log(newEmpleados);//
  }

  @Get()
  getRol() {
    return this.empleadosService.getRol();
  }
}

