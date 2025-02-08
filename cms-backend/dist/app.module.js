"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const categorias_module_1 = require("./features/categorias/categorias.module");
const categoria_entity_1 = require("./features/categorias/domain/entities/categoria.entity");
const post_entity_1 = require("./features/posts/domain/entities/post.entity");
const posts_module_1 = require("./features/posts/posts.module");
const unidade_de_negocio_entity_1 = require("./features/unidade-de-negocio/domain/entities/unidade-de-negocio.entity");
const unidade_de_negocio_module_1 = require("./features/unidade-de-negocio/unidade-de-negocio.module");
const user_entity_1 = require("./features/users/domain/entities/user.entity");
const user_module_1 = require("./features/users/user.module");
const parametros_de_sistema_1 = require("./config/parametros-de-sistema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                url: parametros_de_sistema_1.configSys.db.url,
                synchronize: true,
                autoLoadEntities: true,
                migrations: ["src/config/migrations/*.ts"],
                ssl: {
                    rejectUnauthorized: false
                },
                entities: [
                    unidade_de_negocio_entity_1.UnidadeDeNegocio,
                    categoria_entity_1.Categoria,
                    user_entity_1.User,
                    post_entity_1.Post
                ],
            }),
            user_module_1.UserModule,
            unidade_de_negocio_module_1.UnidadeDenegocioModule,
            categorias_module_1.CategoriasModule,
            posts_module_1.PostsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map