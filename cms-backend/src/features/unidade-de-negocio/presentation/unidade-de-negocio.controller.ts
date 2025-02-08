import { Body, Controller, Post } from "@nestjs/common";
import { CreateUnidadeDeNegocioDto } from "./dto/create-unidade-de-negocio.dto";
import { UnidadeDeNegocioService } from "../application/unidade-de-negocio.service";

@Controller('unidade-de-negocio')
export class UnidadeDeNegocioController {
    constructor(
        private readonly unidadeDeNegocioService: UnidadeDeNegocioService
    ){}

    @Post()
    async create(@Body() createUnidadeDenegocio: CreateUnidadeDeNegocioDto) {
        return await this.unidadeDeNegocioService.create(createUnidadeDenegocio)
    }
}