import { Categoria } from "src/features/categorias/domain/entities/categoria.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";
import { v4 as uuidv4 } from 'uuid';

@Entity({ name:'post', schema: 'public', database: 'cms_db' })
export class Post {
    constructor(post?: Post) {
        if(post) {
            Object.keys(post).forEach((property)=>{
                this[property] = post[property]
            })
        }
        this.id = uuidv4()
        this.createdAt = new Date();
    }

    @Column({ type: 'varchar', primary: true})
    id?: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    title?: string;

    @Column('text', {nullable: true})
    content?: string;

    @Column({ type: 'varchar', nullable: true})
    imageUrl?: string;

    @Column({ type: 'varchar', nullable: true})
    tipo?: 'page|post|produto';

    @Column({ type: 'varchar', nullable: true})
    link?: string;
    
    @Column({ type: 'timestamp', nullable: true })
    createdAt?: Date;
    
    @Column({ type: 'timestamp', nullable: true })
    updatedAt?: Date;

    @ManyToOne(()=> Categoria, (categoria)=>categoria.posts, {nullable: false})
    @JoinColumn({ referencedColumnName: 'id', name: 'categoriaId'})
    @Column({name: 'categoriaId', nullable: false})
    categoriaId: Categoria['id'];

}
