import { BaseEntity } from 'src/shared';
import { Column, ManyToOne, OneToMany, OneToOne } from 'typeorm';

export class Certificate extends BaseEntity{
    @Column()
    name: string;
}