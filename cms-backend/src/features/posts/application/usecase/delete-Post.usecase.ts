import { Repository } from "typeorm"
import { Post } from "../../domain/entities/post.entity"
import { CreatePostDto } from "../../presentation/dto/create-post.dto"

interface IDeletePostUseCase {
    input: {
        id: string
    },
    output: {
        post: Post
    }
}
export class DeletePostUseCase {
    constructor(private postRepository: Repository<Post>){}
    public async handler(input: IDeletePostUseCase['input']) {
        return await this.update(input)
    }

    private async update(input: IDeletePostUseCase['input']) {
        try {
            return await this.postRepository.delete(input.id);
        } catch (error) {
            return error
        }
    }


}