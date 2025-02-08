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
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categoria_entity_1 = require("../domain/entities/categoria.entity");
const typeorm_2 = require("typeorm");
const create_categoria_usecase_1 = require("./usecase/create-categoria.usecase");
const find_all_usecase_1 = require("./usecase/find-all.usecase");
const find_one_usecase_1 = require("./usecase/find-one.usecase");
const find_default_usecase_1 = require("./usecase/find-default.usecase");
let CategoriasService = class CategoriasService {
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    async create(createCategoriaDto) {
        const ucCategoria = new create_categoria_usecase_1.CreateCategoriaUseCase(this.categoriaRepository);
        return await ucCategoria.handler({ categoriaDto: createCategoriaDto });
    }
    async findAll() {
        const ucCategoriaFindAll = new find_all_usecase_1.FindAllCategoriasUseCase(this.categoriaRepository);
        return await ucCategoriaFindAll.handler();
    }
    async findOne(id) {
        const ucCategoriaFindOne = new find_one_usecase_1.FindOneCategoriasUseCase(this.categoriaRepository);
        return await ucCategoriaFindOne.handler({ id });
    }
    async findDefaultCategoria() {
        const ucCategoriaDefault = new find_default_usecase_1.FindCategoriaDefaultUseCase(this.categoriaRepository);
        return await ucCategoriaDefault.handler();
    }
    update(id, updateCategoriaDto) {
        return `This action updates a #${id} categoria`;
    }
    remove(id) {
        return `This action removes a #${id} categoria`;
    }
};
exports.CategoriasService = CategoriasService;
exports.CategoriasService = CategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(categoria_entity_1.Categoria)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriasService);
//# sourceMappingURL=categorias.service.js.map