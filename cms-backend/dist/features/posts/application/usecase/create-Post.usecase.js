"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostUseCase = void 0;
const post_entity_1 = require("../../domain/entities/post.entity");
class CreatePostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async handler(input) {
        return await this.create(input);
    }
    async create(input) {
        const post = new post_entity_1.Post({
            ...input.post,
            categoriaId: input.post.categoriaId,
        });
        return await this.postRepository.insert(post);
    }
}
exports.CreatePostUseCase = CreatePostUseCase;
//# sourceMappingURL=create-Post.usecase.js.map