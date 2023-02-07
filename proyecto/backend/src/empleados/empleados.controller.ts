import { Body, Controller, Post } from '@nestjs/common';
import { CreateEmpleadosDto } from './dto/create-empleado.dto';
import { EmpleadosService } from './empleados.service';

@Controller('empleados')
export class EmpleadosController {
  constructor(private empleadosService: EmpleadosService) {}

  @Post()
  export(@Body() newEmpleados: CreateEmpleadosDto) {
    return this.empleadosService.createEmpleados(newEmpleados);
  }
}
