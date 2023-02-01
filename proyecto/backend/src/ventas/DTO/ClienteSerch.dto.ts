import { IsOptional, IsNumber } from 'class-validator';

export class ClienteSerch{
    @IsOptional()
    @IsNumber()
    cedula:number
}