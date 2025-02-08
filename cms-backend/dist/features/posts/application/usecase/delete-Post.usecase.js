"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePostUseCase = void 0;
class DeletePostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async handler(input) {
        return await this.update(input);
    }
    async update(input) {
        try {
            return await this.postRepository.delete(input.id);
        }
        catch (error) {
            return error;
        }
    }
}
exports.DeletePostUseCase = DeletePostUseCase;
//# sourceMappingURL=delete-Post.usecase.js.map