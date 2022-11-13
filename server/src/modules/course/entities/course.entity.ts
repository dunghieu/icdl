import { Payment } from 'src/modules/payment/entities';
import { BaseEntity } from 'src/shared';
import { Column, Entity, OneToOne } from 'typeorm';

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

  @OneToOne(() => Payment, (payment) => payment.courseId)
  payment: Payment;

  // @Column()
  // subjects: SubjectDto[];
}
