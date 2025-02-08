import { Repository } from "typeorm";

import { CreateUserDto } from "../../presentation/dto/create-user.dto";
import { UnidadeDeNegocio } from "src/features/unidade-de-negocio/domain/entities/unidade-de-negocio.entity";
import { User } from "../../domain/entities/user.entity";

interface IInsertUserUseCase {
    input: {
        user: CreateUserDto
    },
    output: {
        user: User
    }
}
export class InsertUserUseCase {
    constructor(
        private userRepository: Repository<User>
    ) {}

    public async handler(input: IInsertUserUseCase['input']) {
        return await this.insert({
            ...input.user,
            unidadeDeNegocio: new UnidadeDeNegocio()
        })
    }

    private async  insert(user: User) {
        const userEntity = new User(user)
        try {
            return await this.userRepository.insert(userEntity);
            
        } catch (error) {
            return error
        }
    }
}