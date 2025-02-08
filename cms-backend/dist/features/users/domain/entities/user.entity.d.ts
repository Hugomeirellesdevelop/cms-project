import { UnidadeDeNegocio } from 'src/features/unidade-de-negocio/domain/entities/unidade-de-negocio.entity';
export declare class User {
    constructor(user?: User);
    id?: string;
    userName: string;
    passWord: string;
    firstName: string;
    lastName: string;
    unidadeDeNegocio: UnidadeDeNegocio;
}
