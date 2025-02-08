import { Repository } from "typeorm";
import { Post } from "../../domain/entities/post.entity";
interface IFindOnePostsUseCase {
    input: {
        id: string;
    };
}
export declare class FindOnePostsUseCase {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    handler(input: IFindOnePostsUseCase['input']): Promise<Post>;
    private findOnePost;
}
export {};
