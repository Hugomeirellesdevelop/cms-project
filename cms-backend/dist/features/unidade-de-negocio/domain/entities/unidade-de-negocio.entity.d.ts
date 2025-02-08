import { Categoria } from "src/features/categorias/domain/entities/categoria.entity";
import { User } from "src/features/users/domain/entities/user.entity";
export declare class UnidadeDeNegocio {
    constructor(unidadeDeNegocio?: UnidadeDeNegocio);
    id?: string;
    descricao: string;
    users?: User[];
    categorias?: Categoria[];
}
