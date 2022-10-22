import { BaseEntity } from 'src/shared';
import { Column, Entity } from 'typeorm';

@Entity()
export class Feed extends BaseEntity{
    @Column()
    title: string;

    @Column()
    content: string;

}
