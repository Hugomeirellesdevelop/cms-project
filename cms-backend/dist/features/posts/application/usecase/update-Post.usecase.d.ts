import { Repository } from "typeorm";
import { Post } from "../../domain/entities/post.entity";
import { CreatePostDto } from "../../presentation/dto/create-post.dto";
interface IUpdatetePostUseCase {
    input: {
        post: CreatePostDto;
    };
    output: {
        post: Post;
    };
}
export declare class UpdatePostUseCase {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    handler(input: IUpdatetePostUseCase['input']): Promise<any>;
    private update;
}
export {};
