import { Expose } from 'class-transformer';
import { Payment } from 'src/modules/payment/entities';
import { StudentExamMapping } from 'src/modules/student-exam-mapping';
import { BaseEntity } from 'src/shared';
import { Entity, Column, JoinColumn, OneToOne, OneToMany } from 'typeorm';

@Entity()
export class Student extends BaseEntity{
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    gender: string;

    @Column()
    citizenId: string;

    @Column()
    dayOfBirth: string;

    @Column()
    monthOfBirth: string;

    @Column()
    yearOfBirth: string;

    @Column()
    placeOfBirth: string;

    @Column()
    phoneNumber: string;

    @Column()
    email: string;

    @Column()
    ethnic: string;

    @Column()
    certificateType: string;

    @Column()
    type: string;

    @Column({nullable: true})
    code: string;

    @Column({ nullable: true })
    description: string;

    @OneToOne(() => Payment, (payment) => payment.studentId)
    payment: Payment;

    @OneToMany(() => StudentExamMapping, (studentExamMapping) => studentExamMapping.student)
    studentExamMapping: StudentExamMapping[];
}
