import { Post } from "src/features/posts/domain/entities/post.entity";
import { UnidadeDeNegocio } from "src/features/unidade-de-negocio/domain/entities/unidade-de-negocio.entity";
export declare class Categoria {
    constructor(categoria?: Categoria);
    id?: string;
    descricao?: string;
    home?: boolean;
    publicar?: boolean;
    slug?: string;
    layout?: 'default' | 'grid' | 'hero';
    unidadeDeNegocio?: UnidadeDeNegocio;
    posts?: Post[];
}
