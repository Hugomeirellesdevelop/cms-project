"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoriaUseCase = void 0;
const categoria_entity_1 = require("../../domain/entities/categoria.entity");
class CreateCategoriaUseCase {
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    async handler(input) {
        return await this.create(input);
    }
    async create(input) {
        const categoria = new categoria_entity_1.Categoria({
            ...input.categoriaDto,
            unidadeDeNegocio: {
                id: input.categoriaDto.unidadeDeNegocio.id,
                descricao: ""
            }
        });
        return await this.categoriaRepository.insert(categoria);
    }
}
exports.CreateCategoriaUseCase = CreateCategoriaUseCase;
//# sourceMappingURL=create-categoria.usecase.js.map