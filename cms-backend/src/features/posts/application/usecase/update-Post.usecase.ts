import { Repository } from "typeorm"
import { Post } from "../../domain/entities/post.entity"
import { CreatePostDto } from "../../presentation/dto/create-post.dto"

interface IUpdatetePostUseCase {
    input: {
        post: CreatePostDto
    },
    output: {
        post: Post
    }
}
export class UpdatePostUseCase {
    constructor(private postRepository: Repository<Post>){}
    public async handler(input: IUpdatetePostUseCase['input']) {
        return await this.update(input)
    }

    private async update(input: IUpdatetePostUseCase['input']) {
        try {
            return await this.postRepository.save({...input.post});
        } catch (error) {
            return error
        }
    }


}