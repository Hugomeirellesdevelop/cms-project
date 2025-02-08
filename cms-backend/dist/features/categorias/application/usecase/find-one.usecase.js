"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOneCategoriasUseCase = void 0;
class FindOneCategoriasUseCase {
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    async handler(input) {
        return await this.findAll(input);
    }
    async findAll(input) {
        return await this.categoriaRepository.findOne({ where: { id: input.id } });
    }
}
exports.FindOneCategoriasUseCase = FindOneCategoriasUseCase;
//# sourceMappingURL=find-one.usecase.js.map