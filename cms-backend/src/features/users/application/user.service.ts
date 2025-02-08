import { Injectable } from '@nestjs/common';
import { User } from '../domain/entities/user.entity';
import { CreateUserDto } from '../presentation/dto/create-user.dto';
import { UpdateUserDto } from '../presentation/dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InsertUserUseCase } from './use-case/insert-user.usecase';
import { FindUserUserCase } from './use-case/find-user.usecase';


@Injectable()
export class UserService {  
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ){}
  async create(createUserDto: CreateUserDto) {
    const uc = new InsertUserUseCase(this.userRepository);
    return await uc.handler({
        user: { ...createUserDto }
    })
  }

  async findAll() {
    const uc = new FindUserUserCase(this.userRepository);
    return await uc.handler({})
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
