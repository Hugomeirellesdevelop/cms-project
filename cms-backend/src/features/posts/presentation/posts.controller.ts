import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { error } from 'console';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import * as path from 'path';
import { PostsService } from '../application/posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Response } from 'express';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Post('upload/arquivos')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }

  @Post('upload/arquivo')
  @UseInterceptors(FileInterceptor('image'))
  async saveImage(
    @UploadedFile() image: Express.Multer.File,
    @Body('id') id: string,
  ) {
    
    if(!image)
      throw new HttpException('teste', HttpStatus.BAD_GATEWAY)

    console.log('Arquivo recebido:', image);

    return await this.postsService.saveImage(image, id);
  }

  @Get()
  async findAll() {
    return await this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.postsService.findOne(id);
  }

  @Get('/findAllPostsFromCategoria/:categoriaId')
  async findAllPostsFromCategoria(@Param('categoriaId') categoriaId: string) {
    return await this.postsService.FindAllPostsFromCategoria(categoriaId);
  }

  @Get('image/:id')
  async getImage(@Param('id') id: string, @Res() res: Response) {
    try {
      const imageBuffer = await this.postsService.getImage(id);
      res.setHeader('Content-Type', 'image/jpeg');
      res.send(imageBuffer)
    } catch (error) {
      res.status(404).json({message: 'Imagem não encontrada!'})
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
