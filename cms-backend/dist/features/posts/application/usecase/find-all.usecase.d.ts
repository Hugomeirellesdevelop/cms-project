import { Repository } from "typeorm";
import { Post } from "../../domain/entities/post.entity";
export declare class FindAllPostsUseCase {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    handler(): Promise<Post[]>;
    private findAllPosts;
}
