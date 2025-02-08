import { Repository } from "typeorm";
import { Post } from "../../domain/entities/post.entity";
interface IFindAllPostsFromCategoria {
    input: {
        categoriaId: string;
    };
    output: {
        posts: Post[];
    };
}
export declare class FindAllPostsFromCategoria {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    handler(input: IFindAllPostsFromCategoria['input']): Promise<Post[]>;
    private findAllPostsFromCategoria;
}
export {};
