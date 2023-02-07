/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { empleados } from 'src/dataBase/empleados.entity';
import { Repository } from 'typeorm';
import { CreateEmpleadosDto } from './dto/create-empleado.dto';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(empleados)
    private empleadosRepository: Repository<empleados>,
  ) {}
  createEmpleados(empleados) {
    const newEmpleados = this.empleadosRepository.create(empleados);
    return this.empleadosRepository.save(newEmpleados);
  }
}
