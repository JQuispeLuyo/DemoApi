import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './model/user.entity';
import { Repository } from 'typeorm';
import { UsuarioDTO } from './dto/persona.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    ){}

    async findAll(){
        return this.usuarioRepository.find();
    }

    async create(persona: UsuarioDTO){
        let user = this.usuarioRepository.create(persona);
        this.usuarioRepository.save(user);
    }
}
