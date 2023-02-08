import { Body, Controller, Post, Get } from '@nestjs/common';
import { rol } from 'src/dataBase/rol.entity';
import { CreateEmpleadosDto } from './dto/create-empleado.dto';
import { EmpleadosService } from './empleados.service';

@Controller('empleados')
export class EmpleadosController {
  constructor(private empleadosService: EmpleadosService) {}

  @Post()
  registrar(@Body() newEmpleados) {
    return this.empleadosService.createEmpleados(newEmpleados);
    //console.log(newEmpleados);//
  }
}
