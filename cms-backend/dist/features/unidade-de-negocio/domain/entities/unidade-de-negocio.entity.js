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
exports.UnidadeDeNegocio = void 0;
const categoria_entity_1 = require("../../../categorias/domain/entities/categoria.entity");
const user_entity_1 = require("../../../users/domain/entities/user.entity");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let UnidadeDeNegocio = class UnidadeDeNegocio {
    constructor(unidadeDeNegocio) {
        if (unidadeDeNegocio) {
            Object.keys(unidadeDeNegocio).forEach((property) => {
                this[property] = unidadeDeNegocio[property];
            });
        }
        this.id = (0, uuid_1.v4)();
    }
};
exports.UnidadeDeNegocio = UnidadeDeNegocio;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', primary: true }),
    __metadata("design:type", String)
], UnidadeDeNegocio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: false }),
    __metadata("design:type", String)
], UnidadeDeNegocio.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.unidadeDeNegocio),
    __metadata("design:type", Array)
], UnidadeDeNegocio.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => categoria_entity_1.Categoria, (categoria) => categoria.unidadeDeNegocio),
    __metadata("design:type", Array)
], UnidadeDeNegocio.prototype, "categorias", void 0);
exports.UnidadeDeNegocio = UnidadeDeNegocio = __decorate([
    (0, typeorm_1.Entity)({ name: 'unidadeDeNegocio', schema: 'public', database: 'cms_db' }),
    __metadata("design:paramtypes", [UnidadeDeNegocio])
], UnidadeDeNegocio);
//# sourceMappingURL=unidade-de-negocio.entity.js.map