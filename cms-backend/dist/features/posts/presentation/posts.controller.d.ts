import { PostsService } from '../application/posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Response } from 'express';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<import("typeorm").InsertResult>;
    uploadFile(files: Array<Express.Multer.File>): void;
    saveImage(image: Express.Multer.File, id: string): Promise<any>;
    findAll(): Promise<import("../domain/entities/post.entity").Post[]>;
    findOne(id: string): Promise<import("../domain/entities/post.entity").Post>;
    findAllPostsFromCategoria(categoriaId: string): Promise<import("../domain/entities/post.entity").Post[]>;
    getImage(id: string, res: Response): Promise<void>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<any>;
    remove(id: string): Promise<any>;
}
