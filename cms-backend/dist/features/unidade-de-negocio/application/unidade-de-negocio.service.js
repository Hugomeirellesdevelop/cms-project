"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnidadeDeNegocioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const unidade_de_negocio_entity_1 = require("../domain/entities/unidade-de-negocio.entity");
const typeorm_2 = require("typeorm");
const createUnidade_de_negocio_usecase_1 = require("./usecase/createUnidade-de-negocio.usecase");
let UnidadeDeNegocioService = class UnidadeDeNegocioService {
    constructor(unidadeDenegocioRepository) {
        this.unidadeDenegocioRepository = unidadeDenegocioRepository;
    }
    async create(unidadeDeNegocio) {
        const createUnidadeDeNegocioUseCase = new createUnidade_de_negocio_usecase_1.CreateUnidadeDenegocioUseCase(this.unidadeDenegocioRepository);
        return await createUnidadeDeNegocioUseCase.handler({ unidadeDeNegocio });
    }
};
exports.UnidadeDeNegocioService = UnidadeDeNegocioService;
exports.UnidadeDeNegocioService = UnidadeDeNegocioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(unidade_de_negocio_entity_1.UnidadeDeNegocio)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UnidadeDeNegocioService);
//# sourceMappingURL=unidade-de-negocio.service.js.map