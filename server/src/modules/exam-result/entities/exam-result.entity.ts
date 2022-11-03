import { Exam } from 'src/modules/exam/entities/exam.entity';
import { BaseEntity } from 'src/shared';
import { Column, Entity, OneToOne } from 'typeorm';

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

    @OneToOne(() => Exam, (exam) => exam.id)
    exam: Exam;
}
