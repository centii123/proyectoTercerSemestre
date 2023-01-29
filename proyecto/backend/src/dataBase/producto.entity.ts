import { detalle_venta } from './detalle_venta.entity';
import { Entity,PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";

@Entity()
export class producto{
    @PrimaryGeneratedColumn()
    id_prod:number

    @Column({type: 'varchar', length:20})
    nombre_p:string

    @Column({type: 'int'})
    stock:number

    @Column({type: 'int'})
    stock_min:number

    @Column({type: 'decimal'})
    precio:number

    @OneToMany(()=>detalle_venta, det=>det.id_detalle_venta,{cascade:true})
    id_detalle_venta:detalle_venta
}

