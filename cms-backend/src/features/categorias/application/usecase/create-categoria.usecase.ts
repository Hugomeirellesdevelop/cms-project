import { Repository } from "typeorm"
import { CreateCategoriaDto } from "../../presentation/dto/create-categoria.dto"
import { Categoria } from "../../domain/entities/categoria.entity"

interface ICreateCategoriaUseCase {
    input: {
        categoriaDto: CreateCategoriaDto
    }
}
export class CreateCategoriaUseCase {
    constructor(
        private categoriaRepository: Repository<Categoria>
    ) {}

    public async handler(input: ICreateCategoriaUseCase['input']) {
        return await this.create(input)
    }

    private async create(input: ICreateCategoriaUseCase['input']) {
        const categoria = new Categoria({
            ...input.categoriaDto,
            unidadeDeNegocio: {
                id: input.categoriaDto.unidadeDeNegocio.id,
                descricao: ""
            }
        })
        return await this.categoriaRepository.insert(categoria)
    }
}