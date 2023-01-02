import { Exclude } from 'class-transformer';
import { Certificate } from 'src/modules/certificate';
import { Course } from 'src/modules/course';
import { Payment } from 'src/modules/payment/entities';
import { Student } from 'src/modules/student';
import { BaseEntity } from 'src/shared';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

@Entity()
export class Registration extends BaseEntity {
  @Exclude()
  @Column()
  studentId: number;

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'studentId', referencedColumnName: 'id' })
  student: Student;

  @Column()
  type: string;

  @Column()
  @Exclude()
  certificateId: number;

  @JoinColumn({ name: 'certificateId', referencedColumnName: 'id' })
  @ManyToOne(() => Certificate)
  certificate: Certificate;

  @Column()
  courseId: number;

  @JoinColumn({ name: 'courseId', referencedColumnName: 'id' })
  @ManyToOne(() => Course)
  course: Course;

  @Column()
  status: number;

  @Exclude()
  @Column()
  paymentId: number;

  @OneToOne(() => Payment, (payment) => payment.id)
  @JoinColumn({ name: 'paymentId', referencedColumnName: 'id' })
  payment: Payment;
}
