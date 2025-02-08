import { Repository } from "typeorm";
import { Categoria } from "../../domain/entities/categoria.entity";

export class FindAllCategoriasUseCase {
    constructor(
        private categoriaRepository: Repository<Categoria>
    ){}

    public async handler() {
        return await this.findAll()
    }

    private async findAll() {
        return await this.categoriaRepository.find()
    }
}