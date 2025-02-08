import { Repository } from "typeorm";
import { CreateUserDto } from "../../presentation/dto/create-user.dto";
import { User } from "../../domain/entities/user.entity";
interface IInsertUserUseCase {
    input: {
        user: CreateUserDto;
    };
    output: {
        user: User;
    };
}
export declare class InsertUserUseCase {
    private userRepository;
    constructor(userRepository: Repository<User>);
    handler(input: IInsertUserUseCase['input']): Promise<any>;
    private insert;
}
export {};
