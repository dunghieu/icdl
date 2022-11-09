import { ExamResult } from 'src/modules/exam-result';
import { BaseEntity } from 'src/shared';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Exam extends BaseEntity {
    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    code: string;

    @Column()
    instruction: string;

    @Column()
    date: Date;

    @Column()
    startTime: string;

    @Column()
    endTime: string;

    @Column()
    series: number;

    @OneToOne(() => ExamResult, (examResult) => examResult.examId)
    @JoinColumn({ name: 'id', referencedColumnName: 'examId'})
    examResult: ExamResult;
}
