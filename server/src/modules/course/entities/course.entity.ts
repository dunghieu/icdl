import { Payment } from 'src/modules/payment/entities';
import { Student } from 'src/modules/student';
import { StudentCourseMapping } from 'src/modules/student-course-mapping';
import { BaseEntity } from 'src/shared';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Course extends BaseEntity{
  @Column()
  name: string;

  @Column()
  day: string;

  @Column()
  start: string;

  @Column()
  end: string;

  @Column()
  open: Date;

  @Column()
  certificateId: number;

  @ManyToMany(() => Student)
  @JoinTable({
    name: 'student_course_mapping',
    joinColumn: {
      name: 'courseId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'studentId',
      referencedColumnName: 'id',
    },
  })
  students: Student[];

  // @OneToOne(() => Payment, (payment) => payment.courseId)
  // payment: Payment;

  // @Column()
  // subjects: SubjectDto[];
}
