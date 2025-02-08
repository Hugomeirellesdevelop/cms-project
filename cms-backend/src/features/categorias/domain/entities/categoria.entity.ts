import { Post } from "src/features/posts/domain/entities/post.entity";
import { UnidadeDeNegocio } from "src/features/unidade-de-negocio/domain/entities/unidade-de-negocio.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity({ name:'categoria', schema: 'public', database: 'cms_db' })
export class Categoria {
    constructor(categoria?: Categoria) {
        if(categoria) {
            Object.keys(categoria).forEach((property)=>{
                this[property] = categoria[property]
            })
        }
        this.id = uuidv4()
    }

    @Column({ type: 'varchar', length: 100, primary: true })
    id?: string;

    @Column({ type : 'varchar', length: 60, nullable: false })
    descricao?: string;

    @Column({ type: 'boolean', nullable: false, comment: "Se marcada como true indica uma pagina Home."})
    home?: boolean;

    @Column({ type: 'boolean', nullable: false, comment: "Se marcada como true indica que a categoria deve ser publicada."})
    publicar?: boolean;

    @Column({ type: 'varchar', nullable: false, comment: "Path após a barra de dominio" })
    slug?: string;

    @Column({ type: 'varchar', nullable: false })
    layout?:'default'|'grid'|'hero';

    @ManyToOne(()=> UnidadeDeNegocio, (unidadeDeNegocio)=>unidadeDeNegocio.categorias)
    @JoinColumn({ name: 'unidadeDeNegocioId' })
    unidadeDeNegocio?: UnidadeDeNegocio;

    @OneToMany(()=>Post, (post)=>post.categoriaId)
    posts?: Post[];
}
