"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUnidadeDenegocioUseCase = void 0;
const unidade_de_negocio_entity_1 = require("../../domain/entities/unidade-de-negocio.entity");
class CreateUnidadeDenegocioUseCase {
    constructor(unidadeDeNegocioRepository) {
        this.unidadeDeNegocioRepository = unidadeDeNegocioRepository;
    }
    async handler(input) {
        return await this.create(input);
    }
    async create(input) {
        try {
            const un = new unidade_de_negocio_entity_1.UnidadeDeNegocio(input.unidadeDeNegocio);
            return await this.unidadeDeNegocioRepository.insert(un);
        }
        catch (error) {
            return error;
        }
    }
}
exports.CreateUnidadeDenegocioUseCase = CreateUnidadeDenegocioUseCase;
//# sourceMappingURL=createUnidade-de-negocio.usecase.js.map