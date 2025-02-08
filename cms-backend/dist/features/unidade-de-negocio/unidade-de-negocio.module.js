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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnidadeDenegocioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const unidade_de_negocio_entity_1 = require("./domain/entities/unidade-de-negocio.entity");
const unidade_de_negocio_service_1 = require("./application/unidade-de-negocio.service");
const unidade_de_negocio_controller_1 = require("./presentation/unidade-de-negocio.controller");
let UnidadeDenegocioModule = class UnidadeDenegocioModule {
    constructor() {
        console.info('Carregando modulo Unidade de Negocio.');
    }
};
exports.UnidadeDenegocioModule = UnidadeDenegocioModule;
exports.UnidadeDenegocioModule = UnidadeDenegocioModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([unidade_de_negocio_entity_1.UnidadeDeNegocio])],
        providers: [unidade_de_negocio_service_1.UnidadeDeNegocioService],
        controllers: [unidade_de_negocio_controller_1.UnidadeDeNegocioController]
    }),
    __metadata("design:paramtypes", [])
], UnidadeDenegocioModule);
//# sourceMappingURL=unidade-de-negocio.module.js.map