import { UnidadeDeNegocio } from 'src/features/unidade-de-negocio/domain/entities/unidade-de-negocio.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
@Entity({ name:'user', schema: 'public', database: 'cms_db' })
export class User {

    constructor(user?: User) {
        if(user) {
            Object.keys(user).forEach((property)=>{
                this[property] = user[property]
            })
        }
        
        this.id = uuidv4()
    }

    @Column({
        type: 'varchar',
        length: 200,
        nullable: false,
        primary: true
    })
    id?: string;

    @Column({
        type: 'varchar',
        length: 60,
        nullable: false
    })
    userName: string;

    @Column({
        type: 'varchar',
        length: 60,
        nullable: false
    })
    passWord: string;

    @Column({
        type: 'varchar',
        length: 20,
        nullable: false
    })
    firstName: string;

    @Column({
        type:'varchar',
        length: 20,
        nullable: false
    })
    lastName: string;

    @ManyToOne(()=> UnidadeDeNegocio, (unidadeDeNegocio)=>unidadeDeNegocio.users)
    unidadeDeNegocio: UnidadeDeNegocio
}
