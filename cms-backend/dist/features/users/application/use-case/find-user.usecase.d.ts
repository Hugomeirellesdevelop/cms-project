import { Repository } from "typeorm";
import { User } from "../../domain/entities/user.entity";
interface IFindUserUserCase {
    input: {
        user?: User;
    };
    output: {
        user: User[];
    };
}
export declare class FindUserUserCase {
    private userRepository;
    constructor(userRepository: Repository<User>);
    handler(input: IFindUserUserCase['input']): Promise<any[]>;
    private find;
}
export {};
