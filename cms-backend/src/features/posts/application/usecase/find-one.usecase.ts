import { Repository } from "typeorm";
import { Post } from "../../domain/entities/post.entity";

interface IFindOnePostsUseCase {
    input: {
        id: string;
    }
}

export class FindOnePostsUseCase{
    constructor(
        private postRepository: Repository<Post>
    ){}

    public async handler(input: IFindOnePostsUseCase['input']): Promise<Post>{ 
        return await this.findOnePost(input)
    }

    private async findOnePost(input: IFindOnePostsUseCase['input']): Promise<Post>{
        const resultado = await this.postRepository.findOne({where: {id: input.id}})
        console.log({resultado})
        return resultado
    }
}