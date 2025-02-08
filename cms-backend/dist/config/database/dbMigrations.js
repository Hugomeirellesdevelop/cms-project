"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db1DataSource = void 0;
const typeorm_1 = require("typeorm");
const parametros_de_sistema_1 = require("../parametros-de-sistema");
const unidade_de_negocio_entity_1 = require("../../features/unidade-de-negocio/domain/entities/unidade-de-negocio.entity");
const common_1 = require("@nestjs/common");
const categoria_entity_1 = require("../../features/categorias/domain/entities/categoria.entity");
const user_entity_1 = require("../../features/users/domain/entities/user.entity");
exports.db1DataSource = new typeorm_1.DataSource({
    type: 'postgres',
    url: parametros_de_sistema_1.configSys.db.url,
    synchronize: true,
    ssl: {
        rejectUnauthorized: false
    },
    migrations: ["src/config/migrations/*.ts"],
    entities: [
        unidade_de_negocio_entity_1.UnidadeDeNegocio,
        categoria_entity_1.Categoria,
        user_entity_1.User,
        common_1.Post
    ],
});
//# sourceMappingURL=dbMigrations.js.map