import { Repository } from "typeorm";
import { Categoria } from "../../domain/entities/categoria.entity";

interface IFindCategoriaDefaultUseCase {
    output: {
        categoria: Categoria
    }
}

export class FindCategoriaDefaultUseCase {
    constructor(
        private categoriaRepository: Repository<Categoria>
    ){}

    public async handler(): Promise<IFindCategoriaDefaultUseCase['output']['categoria']> {
        return await this.findCategoriaDefault()
    }

    private async findCategoriaDefault(): Promise<IFindCategoriaDefaultUseCase['output']['categoria']> {
        return await this.categoriaRepository.findOne({where: { home: true}});
    }
}