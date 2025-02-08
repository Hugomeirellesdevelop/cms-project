import { User } from "src/features/users/domain/entities/user.entity";
export declare class CreateUnidadeDeNegocioDto {
    id?: string;
    descricao: string;
    userId: User['id'];
}
