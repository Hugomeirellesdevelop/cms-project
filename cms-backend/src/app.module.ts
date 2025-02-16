import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './features/categorias/categorias.module';
import { Categoria } from './features/categorias/domain/entities/categoria.entity';
import { Post } from './features/posts/domain/entities/post.entity';
import { PostsModule } from './features/posts/posts.module';
import { UnidadeDeNegocio } from './features/unidade-de-negocio/domain/entities/unidade-de-negocio.entity';
import { UnidadeDenegocioModule } from './features/unidade-de-negocio/unidade-de-negocio.module';
import { User } from './features/users/domain/entities/user.entity';
import { UserModule } from './features/users/user.module';
import { configSys } from './config/parametros-de-sistema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: configSys.db.host || '82.29.60.183',
      port: 5432,
      username: configSys.db.username || 'postgres',
      password: configSys.db.password || '!123@123#123',
      database: configSys.db.database || 'cms_db',
      synchronize: true,
      autoLoadEntities: true,
      migrations: ["src/config/migrations/*.ts"],
      entities: [
          UnidadeDeNegocio,
          Categoria,
          User,
          Post
      ],
    }),
    UserModule,
    UnidadeDenegocioModule,
    CategoriasModule,
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
