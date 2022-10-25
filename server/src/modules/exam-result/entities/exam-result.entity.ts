import { BaseEntity } from 'src/shared';
import { Column, Entity } from 'typeorm';

@Entity()
export class ExamResult extends BaseEntity {
    @Column()
    studentId: number;

    @Column()
    examId: number;

    @Column()
    theoreticalScore: number;

    @Column()
    practicalScore: number;

    @Column()
    status: number;
}
