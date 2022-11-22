import { Certificate } from 'src/modules/certificate';
import { Student } from 'src/modules/student';
import { BaseEntity } from 'src/shared';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class Registration extends BaseEntity {
  @Column()
  studentId: number;

  @ManyToOne(() => Student, (student) => student.id)
  @JoinColumn({ name: 'studentId', referencedColumnName: 'id' })
  student: Student;

  @Column()
  type: string;

  @Column()
  certificateId: number;
}
