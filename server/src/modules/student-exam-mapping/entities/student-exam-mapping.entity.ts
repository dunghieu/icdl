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

    @Column()
    room: string;

    @Column()
    sbd: string;

    @ManyToOne(() => Exam)
    @JoinColumn({ name: 'examId', referencedColumnName: 'id'})
    exam: Exam;
}
