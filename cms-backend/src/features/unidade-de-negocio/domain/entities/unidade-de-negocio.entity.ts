import { Categoria } from "src/features/categorias/domain/entities/categoria.entity";
import { User } from "src/features/users/domain/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity({ name:'unidadeDeNegocio', schema: 'public', database: 'cms_db' })
export class UnidadeDeNegocio {
    constructor(unidadeDeNegocio?: UnidadeDeNegocio) {
        if(unidadeDeNegocio) {
            Object.keys(unidadeDeNegocio).forEach((property)=>{
                this[property] = unidadeDeNegocio[property]
            })
        }
        
        this.id = uuidv4();
    }

    @Column({ type: 'varchar', primary: true })
    id?: string;

    @Column({ type: 'varchar', length: 60, nullable: false })
    descricao: string;

    @OneToMany(()=> User, (user)=>user.unidadeDeNegocio)
    users?: User[];

    @OneToMany(()=> Categoria, (categoria)=>categoria.unidadeDeNegocio)
    categorias?: Categoria[];
}