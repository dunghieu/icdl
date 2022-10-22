import { BaseEntity } from 'src/shared';
import { Column, Entity } from 'typeorm';

@Entity()
export class City extends BaseEntity{
    @Column()
    name: string;
}
