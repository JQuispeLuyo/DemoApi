import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('USUARIO')
export class Usuario {

    @PrimaryGeneratedColumn()
    IDPER:string;
    
    @Column("varchar2",{length:100})
    NOMPER:string;

    @Column("varchar2", {length:100})
    APEPER:string;

}