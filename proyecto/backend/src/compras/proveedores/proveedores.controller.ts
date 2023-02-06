import { Controller, Post, Body } from '@nestjs/common';
import { ProveedorService } from '../services/proveedor.service';

@Controller('proveedores')
export class ProveedoresController {

    constructor(private proService: ProveedorService){}

    @Post()
    createCat(@Body() newPro){
      return  this.proService.createProveedor(newPro)

    }

}
