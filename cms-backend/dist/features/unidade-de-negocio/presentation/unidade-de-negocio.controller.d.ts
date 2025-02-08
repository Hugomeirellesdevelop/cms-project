import { CreateUnidadeDeNegocioDto } from "./dto/create-unidade-de-negocio.dto";
import { UnidadeDeNegocioService } from "../application/unidade-de-negocio.service";
export declare class UnidadeDeNegocioController {
    private readonly unidadeDeNegocioService;
    constructor(unidadeDeNegocioService: UnidadeDeNegocioService);
    create(createUnidadeDenegocio: CreateUnidadeDeNegocioDto): Promise<any>;
}
