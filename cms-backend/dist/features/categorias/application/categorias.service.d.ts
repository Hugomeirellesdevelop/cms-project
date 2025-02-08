import { CreateCategoriaDto } from '../presentation/dto/create-categoria.dto';
import { UpdateCategoriaDto } from '../presentation/dto/update-categoria.dto';
import { Categoria } from '../domain/entities/categoria.entity';
import { Repository } from 'typeorm';
export declare class CategoriasService {
    private categoriaRepository;
    constructor(categoriaRepository: Repository<Categoria>);
    create(createCategoriaDto: CreateCategoriaDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Categoria[]>;
    findOne(id: string): Promise<Categoria>;
    findDefaultCategoria(): Promise<Categoria>;
    update(id: number, updateCategoriaDto: UpdateCategoriaDto): string;
    remove(id: number): string;
}
