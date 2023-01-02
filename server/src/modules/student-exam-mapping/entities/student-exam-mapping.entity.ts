import { Exam } from 'src/modules/exam';
import { Student } from 'src/modules/student';
import { BaseEntity } from 'src/shared';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class StudentExamMapping extends BaseEntity {
    @Column()
    studentId: number;

    @ManyToOne(() => Student)
    @JoinColumn({ name: 'studentId', referencedColumnName: 'id'})
    student: Student;

    @Column()
    examId: number;

    @ManyToOne(() => Exam)
    @JoinColumn({ name: 'examId', referencedColumnName: 'id'})
    exam: Exam;

    @Column()
    room: string;

    @Column()
    sbd: number;

    @Column()
    start: string;

    @Column()
    end: string;

    @Column()
    theoreticalScore: number;

    @Column()
    practicalScore: number;

    @Column()
    practicalScore1: number;

    @Column()
    practicalScore2: number;

    @Column()
    practicalScore3: number;

    @Column()
    status: number;

    @Column()
    entry: number;
}
