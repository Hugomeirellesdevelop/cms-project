import { Repository } from "typeorm";
import { Categoria } from "../../domain/entities/categoria.entity";
interface IFindOneCategoriasUseCase {
    input: {
        id: string;
    };
    output: {
        categoria: Categoria;
    };
}
export declare class FindOneCategoriasUseCase {
    private categoriaRepository;
    constructor(categoriaRepository: Repository<Categoria>);
    handler(input: IFindOneCategoriasUseCase['input']): Promise<IFindOneCategoriasUseCase['output']['categoria']>;
    private findAll;
}
export {};
