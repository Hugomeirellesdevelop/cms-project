import { Categoria } from "src/features/categorias/domain/entities/categoria.entity";
export declare class Post {
    constructor(post?: Post);
    id?: string;
    title?: string;
    content?: string;
    imageUrl?: string;
    tipo?: 'page|post|produto';
    link?: string;
    createdAt?: Date;
    updatedAt?: Date;
    categoriaId: Categoria['id'];
}
