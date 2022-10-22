import { BaseEntity } from 'src/shared';
import { Column, Entity } from 'typeorm';

@Entity()
export class TestSchedule extends BaseEntity{
    @Column()
    testId: number;

    @Column()
    testDate: string;

    @Column()
    testTime: string;

    @Column()
    testRoom: string;

    @Column()
    testDuration: string;

    @Column()
    testType: string;

    @Column()
    testStatus: string;
}
