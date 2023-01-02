import { BaseEntity } from 'src/shared';
import { Column, Entity } from 'typeorm';

@Entity()
export class Feed extends BaseEntity{
    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    category: string;

    @Column()
    thumbnail: string;

    @Column()
    authorId: number;
}
