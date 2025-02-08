import { Repository } from "typeorm";
import { CreateCategoriaDto } from "../../presentation/dto/create-categoria.dto";
import { Categoria } from "../../domain/entities/categoria.entity";
interface ICreateCategoriaUseCase {
    input: {
        categoriaDto: CreateCategoriaDto;
    };
}
export declare class CreateCategoriaUseCase {
    private categoriaRepository;
    constructor(categoriaRepository: Repository<Categoria>);
    handler(input: ICreateCategoriaUseCase['input']): Promise<import("typeorm").InsertResult>;
    private create;
}
export {};
