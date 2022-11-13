import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
// application
import { BaseEntity } from 'src/shared/index';
import { Student } from 'src/modules/student';
import { Exam } from 'src/modules/exam';
import { Course } from 'src/modules/course';
@Entity()
export class Payment extends BaseEntity {
  @Column()
  @ManyToOne(() => Student, (student) => student.id)
  @JoinColumn({ name: 'studentId', referencedColumnName: 'id'})
  studentId: number;

  @Column()
  intentId: string;

  @Column()
  amount: number;

  @Column()
  status: number;

  @Column()
  secret: string;

  @Column({ nullable: true })
  @OneToOne(() => Exam, (exam) => exam.id)
  @JoinColumn({ name: 'examId', referencedColumnName: 'id' })
  examId: number;

  @Column({ nullable: true })
  @OneToOne(() => Course, (course) => course.id)
  @JoinColumn({ name: 'courseId', referencedColumnName: 'id' })
  courseId: number;
}
