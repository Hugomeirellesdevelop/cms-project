"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostUseCase = void 0;
class UpdatePostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async handler(input) {
        return await this.update(input);
    }
    async update(input) {
        try {
            return await this.postRepository.save({ ...input.post });
        }
        catch (error) {
            return error;
        }
    }
}
exports.UpdatePostUseCase = UpdatePostUseCase;
//# sourceMappingURL=update-Post.usecase.js.map