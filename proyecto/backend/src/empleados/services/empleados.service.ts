/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { empleados } from 'src/dataBase/empleados.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadosService {

  

  constructor(
    @InjectRepository(empleados) private empleadosRepository: Repository<empleados>
  ) {}
  async createEmpleados(empleados) {
    const newEmpleados = await this.empleadosRepository.create(empleados)
    return await this.empleadosRepository.save(newEmpleados)
  }

  async getRol() {
    return this.empleadosRepository.find();
  }
}
