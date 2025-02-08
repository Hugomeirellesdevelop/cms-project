import { Repository } from "typeorm";
import { Post } from "../../domain/entities/post.entity";
import { CreatePostDto } from "../../presentation/dto/create-post.dto";
interface ICreatePostUseCase {
    input: {
        post: CreatePostDto;
    };
    output: {
        post: Post;
    };
}
export declare class CreatePostUseCase {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    handler(input: ICreatePostUseCase['input']): Promise<import("typeorm").InsertResult>;
    private create;
}
export {};
