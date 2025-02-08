import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from '../presentation/dto/create-categoria.dto';
import { UpdateCategoriaDto } from '../presentation/dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from '../domain/entities/categoria.entity';
import { Repository } from 'typeorm';
import { CreateCategoriaUseCase } from './usecase/create-categoria.usecase';
import { FindAllCategoriasUseCase } from './usecase/find-all.usecase';
import { FindOneCategoriasUseCase } from './usecase/find-one.usecase';
import { FindCategoriaDefaultUseCase } from './usecase/find-default.usecase';


@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria) private categoriaRepository: Repository<Categoria>
  ) {}
  async create(createCategoriaDto: CreateCategoriaDto) {
    const ucCategoria = new CreateCategoriaUseCase(this.categoriaRepository)
    return await ucCategoria.handler({categoriaDto: createCategoriaDto})
  }

  async findAll() {
    const ucCategoriaFindAll = new FindAllCategoriasUseCase(this.categoriaRepository)
    return await ucCategoriaFindAll.handler();
  }

  async findOne(id: string) {
    const ucCategoriaFindOne = new FindOneCategoriasUseCase(this.categoriaRepository)
    return await ucCategoriaFindOne.handler({id});
  }

  async findDefaultCategoria() {
    const ucCategoriaDefault = new FindCategoriaDefaultUseCase(this.categoriaRepository)
    return await ucCategoriaDefault.handler()
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
