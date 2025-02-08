import { Repository } from "typeorm"
import { Post } from "../../domain/entities/post.entity"
import { CreatePostDto } from "../../presentation/dto/create-post.dto"

interface ICreatePostUseCase {
    input: {
        post: CreatePostDto
    },
    output: {
        post: Post
    }
}
export class CreatePostUseCase {
    constructor(private postRepository: Repository<Post>){}
    public async handler(input: ICreatePostUseCase['input']) {
        return await this.create(input)
    }

    private async create(input: ICreatePostUseCase['input']) {
        const post = new Post({ 
            ...input.post,
            categoriaId: input.post.categoriaId,
        })

        return await this.postRepository.insert(post);
    }


}