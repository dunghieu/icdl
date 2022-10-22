import { Account } from 'src/modules/account';
import { BaseEntity } from 'src/shared';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Student extends BaseEntity{
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    gender: string;

    @Column()
    studentId: string;

    @Column()
    class: string;

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
    ethnic: string;

    @Column()
    accountId: number;

    @OneToOne(() => Account)
    @JoinColumn({ name: 'accountId' })
    account: Account;
}
