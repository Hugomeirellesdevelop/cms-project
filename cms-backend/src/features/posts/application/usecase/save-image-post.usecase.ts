import { Repository } from "typeorm"
import { Post } from "../../domain/entities/post.entity"
import * as path from 'path';
import { writeFile } from 'fs/promises'

import { UpdatePostUseCase } from "./update-Post.usecase";
import { existsSync } from "fs";

interface ISaveImagePostUseCase {
    input: {
        id: string,
        file: Express.Multer.File
    },
    output: {
        restultado: any
    }
}
export class SaveImagePostUseCase {
    constructor(private postRepository: Repository<Post>){}
    public async handler(input: ISaveImagePostUseCase['input']) {
        return await this.saveFile(input)
    }

    private async saveFile(input: ISaveImagePostUseCase['input']) {
        try {
            const fs = require('fs')
            const uploadPath = path.join(__dirname.replace('/dist',''), '..','..','..','..','uploads');
            if(!existsSync(uploadPath))
                await fs.mkdirSync(uploadPath);
            const filePath = path.join(uploadPath, `[${input.id}]-${input.file.originalname}`);
            await writeFile(filePath, input.file.buffer)
            return {status: 'imagem salva com sucesso!'}
        } catch (error) {
            return error
        }
    }

    private async updateFileNamePost(id: string, imageUrl: string) {
        const ucUpdatePost = new UpdatePostUseCase(this.postRepository);
        return await ucUpdatePost.handler({post: {
            id, imageUrl
        }})
    }
}