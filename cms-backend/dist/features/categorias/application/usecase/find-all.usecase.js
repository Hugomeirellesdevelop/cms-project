"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllCategoriasUseCase = void 0;
class FindAllCategoriasUseCase {
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    async handler() {
        return await this.findAll();
    }
    async findAll() {
        return await this.categoriaRepository.find();
    }
}
exports.FindAllCategoriasUseCase = FindAllCategoriasUseCase;
//# sourceMappingURL=find-all.usecase.js.map