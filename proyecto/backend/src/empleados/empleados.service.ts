/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { empleados } from 'src/dataBase/empleados.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadosService {
  constructor(@InjectRepository(empleados) empledosRepository: Repository) {}
}
