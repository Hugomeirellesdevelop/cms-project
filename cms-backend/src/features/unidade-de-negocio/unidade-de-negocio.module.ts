import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UnidadeDeNegocio } from "./domain/entities/unidade-de-negocio.entity";
import { UnidadeDeNegocioService } from "./application/unidade-de-negocio.service";
import { UnidadeDeNegocioController } from "./presentation/unidade-de-negocio.controller";

@Module({
    imports: [TypeOrmModule.forFeature([UnidadeDeNegocio])],
    providers: [UnidadeDeNegocioService],
    controllers: [UnidadeDeNegocioController]
})
export class UnidadeDenegocioModule {
    constructor(){
        console.info('Carregando modulo Unidade de Negocio.')
    }
}