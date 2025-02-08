import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../domain/entities/post.entity';
import { CreatePostDto } from '../presentation/dto/create-post.dto';
import { UpdatePostDto } from '../presentation/dto/update-post.dto';
import { CreatePostUseCase } from './usecase/create-Post.usecase';
import { DeletePostUseCase } from './usecase/delete-Post.usecase';
import { FindAllPostsFromCategoria } from './usecase/find-all-categorias.usecase';
import { FindAllPostsUseCase } from './usecase/find-all.usecase';
import { FindOnePostsUseCase } from './usecase/find-one.usecase';
import { UpdatePostUseCase } from './usecase/update-Post.usecase';
import { SaveImagePostUseCase } from './usecase/save-image-post.usecase';
import { GetImageUseCase } from './usecase/get-image.usecase';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>
  ){}
  
  async create(createPostDto: CreatePostDto) {
    const ucPost = new CreatePostUseCase(this.postRepository)
    return await ucPost.handler({ post: createPostDto })
  }

  async FindAllPostsFromCategoria(categoriaId: string) {
    const ucPost = new FindAllPostsFromCategoria(this.postRepository);
    return await ucPost.handler({ categoriaId })
  }

  async findAll() {
    const ucPost = new FindAllPostsUseCase(this.postRepository)
    return await ucPost.handler()
  }

  async findOne(id: string) {
    const udFindOne = new FindOnePostsUseCase(this.postRepository);
    return await udFindOne.handler({id})
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const updatePost = new UpdatePostUseCase(this.postRepository);
    return updatePost.handler({ post: {
      id,
      categoriaId: updatePostDto.categoriaId,
      content: updatePostDto.content,
      imageUrl: updatePostDto.imageUrl,
      tipo: updatePostDto.tipo,
      title: updatePostDto.title
    }});
  }

  async remove(id: string) {
    const ucDelete = new DeletePostUseCase(this.postRepository)
    return ucDelete.handler({id});
  }

  async saveImage(file: Express.Multer.File, id: string) {
    const ucSalvaImagem = new SaveImagePostUseCase(this.postRepository);
    return await ucSalvaImagem.handler({id, file})
  }

  async getImage(id: string) {
    const ucGetImage = new GetImageUseCase(this.postRepository);
    return await ucGetImage.handler({id})
  }
}
