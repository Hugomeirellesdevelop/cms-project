"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveImagePostUseCase = void 0;
const path = require("path");
const promises_1 = require("fs/promises");
const update_Post_usecase_1 = require("./update-Post.usecase");
const fs_1 = require("fs");
class SaveImagePostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async handler(input) {
        return await this.saveFile(input);
    }
    async saveFile(input) {
        try {
            const fs = require('fs');
            const uploadPath = path.join(__dirname.replace('/dist', ''), '..', '..', '..', '..', 'uploads');
            if (!(0, fs_1.existsSync)(uploadPath))
                await fs.mkdirSync(uploadPath);
            const filePath = path.join(uploadPath, `[${input.id}]-${input.file.originalname}`);
            await (0, promises_1.writeFile)(filePath, input.file.buffer);
            return { status: 'imagem salva com sucesso!' };
        }
        catch (error) {
            return error;
        }
    }
    async updateFileNamePost(id, imageUrl) {
        const ucUpdatePost = new update_Post_usecase_1.UpdatePostUseCase(this.postRepository);
        return await ucUpdatePost.handler({ post: {
                id, imageUrl
            } });
    }
}
exports.SaveImagePostUseCase = SaveImagePostUseCase;
//# sourceMappingURL=save-image-post.usecase.js.map