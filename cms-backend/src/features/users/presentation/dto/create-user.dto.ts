import { UnidadeDeNegocio } from "src/features/unidade-de-negocio/domain/entities/unidade-de-negocio.entity";
import { CreateUnidadeDeNegocioDto } from "src/features/unidade-de-negocio/presentation/dto/create-unidade-de-negocio.dto";

export class CreateUserDto {
    id?: string;
    userName: string;
    passWord: string;
    firstName: string;
    lastName: string;
}
