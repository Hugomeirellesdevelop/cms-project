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
exports.Categoria = void 0;
const post_entity_1 = require("../../../posts/domain/entities/post.entity");
const unidade_de_negocio_entity_1 = require("../../../unidade-de-negocio/domain/entities/unidade-de-negocio.entity");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let Categoria = class Categoria {
    constructor(categoria) {
        if (categoria) {
            Object.keys(categoria).forEach((property) => {
                this[property] = categoria[property];
            });
        }
        this.id = (0, uuid_1.v4)();
    }
};
exports.Categoria = Categoria;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, primary: true }),
    __metadata("design:type", String)
], Categoria.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: false }),
    __metadata("design:type", String)
], Categoria.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: "Se marcada como true indica uma pagina Home." }),
    __metadata("design:type", Boolean)
], Categoria.prototype, "home", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: "Se marcada como true indica que a categoria deve ser publicada." }),
    __metadata("design:type", Boolean)
], Categoria.prototype, "publicar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: "Path após a barra de dominio" }),
    __metadata("design:type", String)
], Categoria.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], Categoria.prototype, "layout", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => unidade_de_negocio_entity_1.UnidadeDeNegocio, (unidadeDeNegocio) => unidadeDeNegocio.categorias),
    (0, typeorm_1.JoinColumn)({ name: 'unidadeDeNegocioId' }),
    __metadata("design:type", unidade_de_negocio_entity_1.UnidadeDeNegocio)
], Categoria.prototype, "unidadeDeNegocio", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_entity_1.Post, (post) => post.categoriaId),
    __metadata("design:type", Array)
], Categoria.prototype, "posts", void 0);
exports.Categoria = Categoria = __decorate([
    (0, typeorm_1.Entity)({ name: 'categoria', schema: 'public', database: 'cms_db' }),
    __metadata("design:paramtypes", [Categoria])
], Categoria);
//# sourceMappingURL=categoria.entity.js.map