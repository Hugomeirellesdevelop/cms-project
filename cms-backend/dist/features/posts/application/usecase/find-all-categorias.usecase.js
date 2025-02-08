"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllPostsFromCategoria = void 0;
class FindAllPostsFromCategoria {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async handler(input) {
        return await this.findAllPostsFromCategoria(input);
    }
    async findAllPostsFromCategoria(input) {
        return await this.postRepository.findBy({ categoriaId: input.categoriaId });
    }
}
exports.FindAllPostsFromCategoria = FindAllPostsFromCategoria;
//# sourceMappingURL=find-all-categorias.usecase.js.map