import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity('tb_local')
class Local {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nome: string;

    @Column('text')
    latitude: string;

    @Column('text')
    longitude: string;
}
export default Local;