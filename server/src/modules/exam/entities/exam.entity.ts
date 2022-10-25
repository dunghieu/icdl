import { BaseEntity } from 'src/shared';
import { Column, Entity } from 'typeorm';

@Entity()
export class Exam extends BaseEntity {
    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    instruction: string;

    @Column()
    date: Date;

    @Column()
    startTime: Date;

    @Column()
    endTime: Date;
}
