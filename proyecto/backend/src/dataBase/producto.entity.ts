import { categorias } from './categorias.entity';
import { detalle_venta } from './detalle_venta.entity';
import { Entity,PrimaryGeneratedColumn,Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";

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

    @ManyToOne(()=>categorias,cat=>cat.id_prod,{onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({name:'id_cat'})
    id_cat:categorias[]
}

