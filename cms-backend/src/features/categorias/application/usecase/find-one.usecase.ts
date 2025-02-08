import { Repository } from "typeorm";
import { Categoria } from "../../domain/entities/categoria.entity";

interface IFindOneCategoriasUseCase {
    input: {
        id: string
    },
    output: {
        categoria: Categoria
    }
}

export class FindOneCategoriasUseCase {
    constructor(
        private categoriaRepository: Repository<Categoria>
    ){}

    public async handler(input: IFindOneCategoriasUseCase['input']): Promise<IFindOneCategoriasUseCase['output']['categoria']> {
        return await this.findAll(input)
    }

    private async findAll(input: IFindOneCategoriasUseCase['input']): Promise<IFindOneCategoriasUseCase['output']['categoria']> {
        return await this.categoriaRepository.findOne({where: { id: input.id}});
    }
}