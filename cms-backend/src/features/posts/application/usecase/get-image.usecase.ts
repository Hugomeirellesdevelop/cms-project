import * as path from 'path';
import { readFile } from 'fs/promises';
import { Repository } from 'typeorm';
import { Post } from '../../domain/entities/post.entity';
import { existsSync } from 'fs';
import { HttpCode, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import e from 'express';
interface IGetImageUseCase {
    input: {
        id: string
    }
}
export class GetImageUseCase {
    constructor(private postRepository: Repository<Post>) {}
    public async handler(input: IGetImageUseCase['input']){
        return await this.lerArquivo(input)
    }

    private async lerArquivo(input: IGetImageUseCase['input']) {
        const post = await this.postRepository.findOne({where: {id: input.id}})

        try {
            const uploadPath = path.join(__dirname.replace('/dist', ''), '..', '..', '..', '..', 'uploads');
            const filePath = path.join(uploadPath, post.imageUrl);
            if(!existsSync(filePath))
                throw new NotFoundException('Arquivo não encontrado.')

            return await readFile(filePath);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST)            
        }
    }
}