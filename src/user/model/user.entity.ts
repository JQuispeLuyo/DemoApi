import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity('USUARIO')
export class Usuario {

    @PrimaryColumn()
    IDPER:number;
    
    @Column("varchar2",{length:100})
    NOMPER:string;

    @Column("varchar2", {length:100})
    APEPER:string;

}