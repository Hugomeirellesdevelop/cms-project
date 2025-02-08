import { Module } from '@nestjs/common';
import { PostsService } from './application/posts.service';
import { PostsController } from './presentation/posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './domain/entities/post.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
