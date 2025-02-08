import { User } from "src/features/users/domain/entities/user.entity";
import { CreateUserDto } from "src/features/users/presentation/dto/create-user.dto";

export class CreateUnidadeDeNegocioDto {
    id?: string;
    descricao: string;
    userId: User['id']
}