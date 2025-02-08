import { Repository } from "typeorm";
import { Categoria } from "../../domain/entities/categoria.entity";
export declare class FindAllCategoriasUseCase {
    private categoriaRepository;
    constructor(categoriaRepository: Repository<Categoria>);
    handler(): Promise<Categoria[]>;
    private findAll;
}
