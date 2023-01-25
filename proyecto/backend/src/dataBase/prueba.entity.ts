import { Entity, PrimaryGeneratedColumn,Column } from 'typeorm'

@Entity()
export class nombres{
    @PrimaryGeneratedColumn()
    id_nombres:number

    @Column({type: 'text'})
    descripccion:string
}