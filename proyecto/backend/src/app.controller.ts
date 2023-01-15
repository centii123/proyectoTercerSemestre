import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Datos } from './interfases/datos';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('mostrarDatos')
  getHello(): number {
    //return this.appService.getHello();
    return this.appService.suma();
  }

  @Post('Ingresar')
  ingresar(@Body() datos:Datos): string {
    //return this.appService.getHello();
    console.log(datos.apellido)
    return 'hola '+datos.apellido;
  }
}
