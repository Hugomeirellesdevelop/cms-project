import { Module } from '@nestjs/common';

import { CategoriasController } from './presentation/categorias.controller';
import { CategoriasService } from './application/categorias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './domain/entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  controllers: [CategoriasController],
  providers: [CategoriasService],
})
export class CategoriasModule {
  constructor() {
    console.info('Carregando modulo Categorias.')
  }
  
}
