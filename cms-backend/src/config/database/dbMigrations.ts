import { DataSource } from "typeorm";
import { configSys } from "../parametros-de-sistema";
import { UnidadeDeNegocio } from "src/features/unidade-de-negocio/domain/entities/unidade-de-negocio.entity";
import { Post } from "@nestjs/common";
import { Categoria } from "src/features/categorias/domain/entities/categoria.entity";
import { User } from "src/features/users/domain/entities/user.entity";

export const db1DataSource = new DataSource({
    type: 'postgres',
      url: configSys.db.url,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false
      },
      migrations: ["src/config/migrations/*.ts"],
      entities: [
                UnidadeDeNegocio,
                Categoria,
                User,
                Post
            ],
});