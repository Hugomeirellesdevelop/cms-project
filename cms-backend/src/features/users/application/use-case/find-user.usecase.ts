import { Repository } from "typeorm";
import { User } from "../../domain/entities/user.entity";

interface IFindUserUserCase {
    input: {
        user?: User
    },
    output: {
        user: User[];
    }
}

export class FindUserUserCase {

    constructor(
        private userRepository: Repository<User>
    ) {}

    public async handler(input: IFindUserUserCase['input']) {
        return await this.find({...input.user})
    }

    private async find(user: User) {
        let resultado = [];
        if(user)
            resultado = await this.userRepository.find({where: {...user}})

        resultado = await this.userRepository.find();
        return resultado;
    }
}