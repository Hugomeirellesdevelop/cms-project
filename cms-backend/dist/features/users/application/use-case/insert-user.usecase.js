"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertUserUseCase = void 0;
const unidade_de_negocio_entity_1 = require("../../../unidade-de-negocio/domain/entities/unidade-de-negocio.entity");
const user_entity_1 = require("../../domain/entities/user.entity");
class InsertUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async handler(input) {
        return await this.insert({
            ...input.user,
            unidadeDeNegocio: new unidade_de_negocio_entity_1.UnidadeDeNegocio()
        });
    }
    async insert(user) {
        const userEntity = new user_entity_1.User(user);
        try {
            return await this.userRepository.insert(userEntity);
        }
        catch (error) {
            return error;
        }
    }
}
exports.InsertUserUseCase = InsertUserUseCase;
//# sourceMappingURL=insert-user.usecase.js.map