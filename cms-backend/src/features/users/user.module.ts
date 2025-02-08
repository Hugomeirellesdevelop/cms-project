import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './application/user.service';
import { User } from './domain/entities/user.entity';
import { UserController } from './presentation/user.controller';

@Module({
   imports: [TypeOrmModule.forFeature([User])],
   controllers: [UserController],
   providers: [UserService],
})
export class UserModule {} 
