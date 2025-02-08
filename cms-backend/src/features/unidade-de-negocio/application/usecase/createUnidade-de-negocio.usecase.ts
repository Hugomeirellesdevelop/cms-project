import { Repository } from "typeorm"
import { UnidadeDeNegocio } from "../../domain/entities/unidade-de-negocio.entity"
import { CreateUnidadeDeNegocioDto } from "../../presentation/dto/create-unidade-de-negocio.dto"

interface ICreateUnidadeDenegocioUseCase {
    input: {
        unidadeDeNegocio: CreateUnidadeDeNegocioDto
    },
    output: {
        unidadeDeNegocio: UnidadeDeNegocio
    }
}
export class CreateUnidadeDenegocioUseCase {
    constructor(
        private unidadeDeNegocioRepository: Repository<UnidadeDeNegocio>
    ) {}

    public async handler(input: ICreateUnidadeDenegocioUseCase['input']){
        return await this.create(input)
    }

    private async create(input: ICreateUnidadeDenegocioUseCase['input']) {
        try {
            const un = new UnidadeDeNegocio(input.unidadeDeNegocio )
            return await this.unidadeDeNegocioRepository.insert(un)
        } catch (error) {
            return error
        }   
    }
}