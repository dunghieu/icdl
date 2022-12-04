import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
// application
import { BaseEntity } from 'src/shared/index';
import { Exam } from 'src/modules/exam';
import { Course } from 'src/modules/course';
import { Registration } from 'src/modules/registration';
@Entity()
export class Payment extends BaseEntity {
  @Column()
  intentId: string;

  @Column()
  amount: number;

  @Column()
  status: number;

  @Column()
  secret: string;

  // @Column({ nullable: true })
  // @OneToOne(() => Exam, (exam) => exam.id)
  // @JoinColumn({ name: 'examId', referencedColumnName: 'id' })
  // examId: number;

  // @Column({ nullable: true })
  // @OneToOne(() => Course, (course) => course.id)
  // @JoinColumn({ name: 'courseId', referencedColumnName: 'id' })
  // courseId: number;
}
