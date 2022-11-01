import { Column, Entity } from 'typeorm';
// application
import { BaseEntity } from 'src/shared/index';
@Entity()
export class PaymentEntity extends BaseEntity {
  @Column()
  studentId: number;

  @Column()
  paymentId: string;

  @Column()
  amount: number;

  @Column()
  status: number;
}
