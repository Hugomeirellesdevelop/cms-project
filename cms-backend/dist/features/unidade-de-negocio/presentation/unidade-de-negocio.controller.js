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
exports.UnidadeDeNegocioController = void 0;
const common_1 = require("@nestjs/common");
const create_unidade_de_negocio_dto_1 = require("./dto/create-unidade-de-negocio.dto");
const unidade_de_negocio_service_1 = require("../application/unidade-de-negocio.service");
let UnidadeDeNegocioController = class UnidadeDeNegocioController {
    constructor(unidadeDeNegocioService) {
        this.unidadeDeNegocioService = unidadeDeNegocioService;
    }
    async create(createUnidadeDenegocio) {
        return await this.unidadeDeNegocioService.create(createUnidadeDenegocio);
    }
};
exports.UnidadeDeNegocioController = UnidadeDeNegocioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_unidade_de_negocio_dto_1.CreateUnidadeDeNegocioDto]),
    __metadata("design:returntype", Promise)
], UnidadeDeNegocioController.prototype, "create", null);
exports.UnidadeDeNegocioController = UnidadeDeNegocioController = __decorate([
    (0, common_1.Controller)('unidade-de-negocio'),
    __metadata("design:paramtypes", [unidade_de_negocio_service_1.UnidadeDeNegocioService])
], UnidadeDeNegocioController);
//# sourceMappingURL=unidade-de-negocio.controller.js.map