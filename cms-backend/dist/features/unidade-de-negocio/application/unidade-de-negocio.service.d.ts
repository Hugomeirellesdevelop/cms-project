import { CreateUnidadeDeNegocioDto } from '../presentation/dto/create-unidade-de-negocio.dto';
import { UnidadeDeNegocio } from '../domain/entities/unidade-de-negocio.entity';
import { Repository } from 'typeorm';
export declare class UnidadeDeNegocioService {
    private unidadeDenegocioRepository;
    constructor(unidadeDenegocioRepository: Repository<UnidadeDeNegocio>);
    create(unidadeDeNegocio: CreateUnidadeDeNegocioDto): Promise<any>;
}
