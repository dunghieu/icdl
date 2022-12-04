import { BaseEntity } from 'src/shared';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Course } from 'src/modules/course';
import { Student } from 'src/modules/student';

@Entity()
export class StudentCourseMapping extends BaseEntity{
    @Column()
    studentId: number;

    @ManyToOne(() => Student)
    @JoinColumn({ name: 'studentId', referencedColumnName: 'id'})
    student: Student;

    @Column()
    courseId: number;

    @ManyToOne(() => Course)
    @JoinColumn({ name: 'courseId', referencedColumnName: 'id'})
    course: Course;
}
