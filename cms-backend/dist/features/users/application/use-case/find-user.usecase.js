"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserUserCase = void 0;
class FindUserUserCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async handler(input) {
        return await this.find({ ...input.user });
    }
    async find(user) {
        let resultado = [];
        if (user)
            resultado = await this.userRepository.find({ where: { ...user } });
        resultado = await this.userRepository.find();
        return resultado;
    }
}
exports.FindUserUserCase = FindUserUserCase;
//# sourceMappingURL=find-user.usecase.js.map