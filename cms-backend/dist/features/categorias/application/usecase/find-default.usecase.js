"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCategoriaDefaultUseCase = void 0;
class FindCategoriaDefaultUseCase {
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    async handler() {
        return await this.findCategoriaDefault();
    }
    async findCategoriaDefault() {
        return await this.categoriaRepository.findOne({ where: { home: true } });
    }
}
exports.FindCategoriaDefaultUseCase = FindCategoriaDefaultUseCase;
//# sourceMappingURL=find-default.usecase.js.map