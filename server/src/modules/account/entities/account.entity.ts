import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/shared';

@Entity()
export class Account extends BaseEntity{
    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;
}
