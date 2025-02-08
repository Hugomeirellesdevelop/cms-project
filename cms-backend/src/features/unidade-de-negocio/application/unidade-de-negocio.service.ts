import { Injectable } from '@nestjs/common';
import { CreateUnidadeDeNegocioDto } from '../presentation/dto/create-unidade-de-negocio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UnidadeDeNegocio } from '../domain/entities/unidade-de-negocio.entity';
import { Repository } from 'typeorm';
import { CreateUnidadeDenegocioUseCase } from './usecase/createUnidade-de-negocio.usecase';

@Injectable()
export class UnidadeDeNegocioService {
    constructor(
        @InjectRepository(UnidadeDeNegocio) private unidadeDenegocioRepository: Repository<UnidadeDeNegocio>
    ) { }

    async create(unidadeDeNegocio: CreateUnidadeDeNegocioDto) {
        const createUnidadeDeNegocioUseCase = new CreateUnidadeDenegocioUseCase(this.unidadeDenegocioRepository)
        return await createUnidadeDeNegocioUseCase.handler({ unidadeDeNegocio });
    }
}
