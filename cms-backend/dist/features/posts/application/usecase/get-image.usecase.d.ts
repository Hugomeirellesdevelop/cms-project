import { Repository } from 'typeorm';
import { Post } from '../../domain/entities/post.entity';
interface IGetImageUseCase {
    input: {
        id: string;
    };
}
export declare class GetImageUseCase {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    handler(input: IGetImageUseCase['input']): Promise<Buffer<ArrayBufferLike>>;
    private lerArquivo;
}
export {};
