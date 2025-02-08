import { Repository } from "typeorm";
import { Post } from "../../domain/entities/post.entity";
interface IDeletePostUseCase {
    input: {
        id: string;
    };
    output: {
        post: Post;
    };
}
export declare class DeletePostUseCase {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    handler(input: IDeletePostUseCase['input']): Promise<any>;
    private update;
}
export {};
