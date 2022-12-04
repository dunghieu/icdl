import { BaseEntity } from 'src/shared';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Exam } from '../exam';
import { Registration } from '../registration/entities/registration.entity';

@Entity()
export class Certificate extends BaseEntity{
    @Column()
    name: string;

    @OneToMany(() => Exam, (exam) => exam.certificate)
    exams: Exam[];

  // @OneToOne(() => Registration, (registration) => registration.certificate)
  // registration: Registration;
}