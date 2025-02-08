"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOnePostsUseCase = void 0;
class FindOnePostsUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async handler(input) {
        return await this.findOnePost(input);
    }
    async findOnePost(input) {
        const resultado = await this.postRepository.findOne({ where: { id: input.id } });
        console.log({ resultado });
        return resultado;
    }
}
exports.FindOnePostsUseCase = FindOnePostsUseCase;
//# sourceMappingURL=find-one.usecase.js.map