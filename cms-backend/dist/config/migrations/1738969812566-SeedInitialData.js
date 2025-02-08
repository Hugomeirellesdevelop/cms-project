"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedInitialData1738969812566 = void 0;
class SeedInitialData1738969812566 {
    async up(queryRunner) {
        await queryRunner.query(`
            insert into "unidadeDeNegocio" (
                id, 
                descricao
            )values(
                'bee7fc4c-418e-4673-8197-56d8a2c187ed', 
                'Portifólio Hugo Meirelles'
            )
            `);
        await queryRunner.query(`
              insert into categoria (id, descricao, "unidadeDeNegocioId", home, 
                publicar, slug, layout
                )values(
                'c2ad30fb-45fd-43c1-a6e6-f90065042308', 
                'Home', 
                'bee7fc4c-418e-4673-8197-56d8a2c187ed', 
                true, 
                true, 
                'home', 
                'hero'
                )
            `);
        await queryRunner.query(`
                insert into categoria (id, descricao, "unidadeDeNegocioId", home, 
                  publicar, slug, layout
                  )values(
                  'fccbcb0d-6db1-4b4d-8e9a-352d605711f0', 
                  'Apresentação', 
                  'bee7fc4c-418e-4673-8197-56d8a2c187ed', 
                  true, 
                  true, 
                  'apresentacao', 
                  'default'
                  )
              `);
        await queryRunner.query(`
                insert into categoria (id, descricao, "unidadeDeNegocioId", home, 
                  publicar, slug, layout
                  )values(
                  'cb59c2d6-8e9d-40e5-9010-58ec80dc9302', 
                  'Experiência Profissional', 
                  'bee7fc4c-418e-4673-8197-56d8a2c187ed', 
                  true, 
                  true, 
                  'experiencia-profissional', 
                  'grid'
                  )
              `);
        await queryRunner.query(`
                insert into categoria (id, descricao, "unidadeDeNegocioId", home, 
                  publicar, slug, layout
                  )values(
                  '6e6a63bc-1490-4eef-8f06-368e47e70be2', 
                  'Blog', 
                  'bee7fc4c-418e-4673-8197-56d8a2c187ed', 
                  true, 
                  true, 
                  'blog', 
                  'default'
                  )
              `);
        await queryRunner.query(`
                insert into post (
                    id, title, "createdAt", "updatedAt", "imageUrl", 
                    tipo, content, "categoriaId", link
                )values(
                    'f102b767-85b0-4211-a3a2-8e7564fc9b91', 
                    'Hugo Meirelles', 
                    '2025-01-22 11:31:57.525', 
                    '2025-01-22 11:31:57.525', 
                    '/[f102b767-85b0-4211-a3a2-8e7564fc9b91]-WhatsApp Image 2025-01-27 at 17.43.40.jpeg', 
                    null, 
                    '<p><strong>Fullstack</strong></p>', 
                    'c2ad30fb-45fd-43c1-a6e6-f90065042308', 
                    '/categorias/fccbcb0d-6db1-4b4d-8e9a-352d605711f0'
                )
                `);
    }
    async down(queryRunner) {
    }
}
exports.SeedInitialData1738969812566 = SeedInitialData1738969812566;
//# sourceMappingURL=1738969812566-SeedInitialData.js.map