import { IsOptional, IsString } from 'class-validator';

export class ProductSerchDTO{
    @IsOptional()
    @IsString()
    producto:string
}