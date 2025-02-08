import { Repository } from "typeorm";
import { Post } from "../../domain/entities/post.entity";


export class FindAllPostsUseCase{
    constructor(
        private postRepository: Repository<Post>
    ){}

    public async handler(): Promise<Post[]>{ 
        return await this.findAllPosts()
    }

    private async findAllPosts(): Promise<Post[]>{
        return await this.postRepository.find()
    }
}