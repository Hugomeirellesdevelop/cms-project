"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllPostsUseCase = void 0;
class FindAllPostsUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async handler() {
        return await this.findAllPosts();
    }
    async findAllPosts() {
        return await this.postRepository.find();
    }
}
exports.FindAllPostsUseCase = FindAllPostsUseCase;
//# sourceMappingURL=find-all.usecase.js.map