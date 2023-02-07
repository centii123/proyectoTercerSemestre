import { Body, Controller, Post } from '@nestjs/common';
import { CreateEmpleadosDto } from './dto/create-empleado.dto';
import { EmpleadosService } from './empleados.service'

@Controller('empleados')
export class EmpleadosController {

    constructor(private empleadosService: EmpleadosService) {
        return this.empleadosService.createEmpleados(this.newEmpleados)
    }

    @Post('empleados')
    export(@Body()) newEmpleados: CreateEmpleadosDto{
        this.EmpleadosService.createEmpleados(newEmpleados)
    }
}
