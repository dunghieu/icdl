import { BaseEntity } from 'src/shared';
import { Column, Entity } from 'typeorm';

@Entity()
export class Ethnic extends BaseEntity{
    @Column()
    name: string;

    @Column({nullable: true})
    description: string;
}
