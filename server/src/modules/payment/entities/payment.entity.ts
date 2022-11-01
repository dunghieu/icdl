import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
// application
import { BaseEntity } from 'src/shared/index';
@Entity('payment')
export class PaymentEntity extends BaseEntity {
  @Column({ nullable: false })
  order_id?: number;

  @Column({ nullable: true })
  status?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  transaction_amt: number;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  payment_method?: string;
  @Column({ type: 'varchar', nullable: true })
  charge_id?: string;

  @Column({ type: 'datetime', nullable: true })
  date: Date;

  @Column({ nullable: true })
  account_id?: number;

  @Column({ type: 'varchar', nullable: true })
  transaction_type?: string;

  @Column({ type: 'varchar', nullable: true })
  transaction_description?: string;
}
