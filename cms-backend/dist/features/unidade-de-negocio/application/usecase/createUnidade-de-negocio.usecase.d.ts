import { Repository } from "typeorm";
import { UnidadeDeNegocio } from "../../domain/entities/unidade-de-negocio.entity";
import { CreateUnidadeDeNegocioDto } from "../../presentation/dto/create-unidade-de-negocio.dto";
interface ICreateUnidadeDenegocioUseCase {
    input: {
        unidadeDeNegocio: CreateUnidadeDeNegocioDto;
    };
    output: {
        unidadeDeNegocio: UnidadeDeNegocio;
    };
}
export declare class CreateUnidadeDenegocioUseCase {
    private unidadeDeNegocioRepository;
    constructor(unidadeDeNegocioRepository: Repository<UnidadeDeNegocio>);
    handler(input: ICreateUnidadeDenegocioUseCase['input']): Promise<any>;
    private create;
}
export {};
