import { Repository } from "typeorm";
import { Categoria } from "../../domain/entities/categoria.entity";
interface IFindCategoriaDefaultUseCase {
    output: {
        categoria: Categoria;
    };
}
export declare class FindCategoriaDefaultUseCase {
    private categoriaRepository;
    constructor(categoriaRepository: Repository<Categoria>);
    handler(): Promise<IFindCategoriaDefaultUseCase['output']['categoria']>;
    private findCategoriaDefault;
}
export {};
