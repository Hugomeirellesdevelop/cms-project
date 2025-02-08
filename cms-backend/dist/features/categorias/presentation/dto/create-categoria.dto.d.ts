export declare class CreateCategoriaDto {
    slug?: string;
    descricao: string;
    layout: 'default' | 'grid' | 'hero';
    unidadeDeNegocio: {
        id: string;
    };
}
