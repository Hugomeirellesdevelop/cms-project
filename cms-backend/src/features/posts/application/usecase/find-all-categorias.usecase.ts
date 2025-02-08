import { Repository } from "typeorm";
import { Post } from "../../domain/entities/post.entity";

interface IFindAllPostsFromCategoria {
    input: {
        categoriaId: string
    },
    output: {
        posts: Post[]
    }
}
export class FindAllPostsFromCategoria{
    constructor(
        private postRepository: Repository<Post>
    ){}

    public async handler(input: IFindAllPostsFromCategoria['input']): Promise<Post[]>{ 
        return await this.findAllPostsFromCategoria(input)
    }

    private async findAllPostsFromCategoria(input: IFindAllPostsFromCategoria['input']): Promise<Post[]>{
        return await this.postRepository.findBy({ categoriaId: input.categoriaId})
    }
}