import { Repository } from "typeorm";
import { Post } from "../../domain/entities/post.entity";
interface ISaveImagePostUseCase {
    input: {
        id: string;
        file: Express.Multer.File;
    };
    output: {
        restultado: any;
    };
}
export declare class SaveImagePostUseCase {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    handler(input: ISaveImagePostUseCase['input']): Promise<any>;
    private saveFile;
    private updateFileNamePost;
}
export {};
