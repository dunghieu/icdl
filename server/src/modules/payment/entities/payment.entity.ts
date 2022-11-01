import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
// application
import { BaseEntity } from 'src/shared/index';
import { Student } from 'src/modules/student';
@Entity()
export class Payment extends BaseEntity {
  @Column()
  @OneToOne(() => Student, (student) => student.id)
  @JoinColumn({ name: 'studentId', referencedColumnName: 'id'})
  studentId: number;

  @Column()
  intentId: string;

  @Column()
  amount: number;

  @Column()
  status: number;
}
