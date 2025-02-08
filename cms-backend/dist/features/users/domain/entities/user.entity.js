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
exports.User = void 0;
const unidade_de_negocio_entity_1 = require("../../../unidade-de-negocio/domain/entities/unidade-de-negocio.entity");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let User = class User {
    constructor(user) {
        if (user) {
            Object.keys(user).forEach((property) => {
                this[property] = user[property];
            });
        }
        this.id = (0, uuid_1.v4)();
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 200,
        nullable: false,
        primary: true
    }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 60,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 60,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "passWord", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 20,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 20,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => unidade_de_negocio_entity_1.UnidadeDeNegocio, (unidadeDeNegocio) => unidadeDeNegocio.users),
    __metadata("design:type", unidade_de_negocio_entity_1.UnidadeDeNegocio)
], User.prototype, "unidadeDeNegocio", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: 'user', schema: 'public', database: 'cms_db' }),
    __metadata("design:paramtypes", [User])
], User);
//# sourceMappingURL=user.entity.js.map