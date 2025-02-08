"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetImageUseCase = void 0;
const path = require("path");
const promises_1 = require("fs/promises");
const fs_1 = require("fs");
const common_1 = require("@nestjs/common");
class GetImageUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async handler(input) {
        return await this.lerArquivo(input);
    }
    async lerArquivo(input) {
        const post = await this.postRepository.findOne({ where: { id: input.id } });
        try {
            const uploadPath = path.join(__dirname.replace('/dist', ''), '..', '..', '..', '..', 'uploads');
            const filePath = path.join(uploadPath, post.imageUrl);
            if (!(0, fs_1.existsSync)(filePath))
                throw new common_1.NotFoundException('Arquivo não encontrado.');
            return await (0, promises_1.readFile)(filePath);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
}
exports.GetImageUseCase = GetImageUseCase;
//# sourceMappingURL=get-image.usecase.js.map