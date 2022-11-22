import { BaseEntity } from 'src/shared';
import { Column } from 'typeorm';

export class StudentCourseMapping extends BaseEntity{
    @Column()
    studentId: number;

    @Column()
    courseId: number;
}
