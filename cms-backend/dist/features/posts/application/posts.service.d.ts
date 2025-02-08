import { Repository } from 'typeorm';
import { Post } from '../domain/entities/post.entity';
import { CreatePostDto } from '../presentation/dto/create-post.dto';
import { UpdatePostDto } from '../presentation/dto/update-post.dto';
export declare class PostsService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    create(createPostDto: CreatePostDto): Promise<import("typeorm").InsertResult>;
    FindAllPostsFromCategoria(categoriaId: string): Promise<Post[]>;
    findAll(): Promise<Post[]>;
    findOne(id: string): Promise<Post>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<any>;
    remove(id: string): Promise<any>;
    saveImage(file: Express.Multer.File, id: string): Promise<any>;
    getImage(id: string): Promise<Buffer<ArrayBufferLike>>;
}
