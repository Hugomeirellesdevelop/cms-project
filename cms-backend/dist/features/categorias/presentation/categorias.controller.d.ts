import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { CategoriasService } from '../application/categorias.service';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    create(createCategoriaDto: CreateCategoriaDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<import("../domain/entities/categoria.entity").Categoria[]>;
    findOne(id: string): Promise<import("../domain/entities/categoria.entity").Categoria>;
    default(): Promise<import("../domain/entities/categoria.entity").Categoria>;
    update(id: string, updateCategoriaDto: UpdateCategoriaDto): string;
    remove(id: string): string;
}
