import { Payment } from 'src/modules/payment/entities';
import { BaseEntity } from 'src/shared';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Exam extends BaseEntity {
    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    code: string;

    @Column()
    instruction: string;

    @Column()
    date: Date;

    @Column()
    series: number;

    @Column()
    certificateId: number;

    @OneToOne(() => Payment, (payment) => payment.examId)
    payment: Payment;
}
