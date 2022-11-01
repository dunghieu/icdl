import { BaseEntity } from 'src/shared';
import { Entity, Column } from 'typeorm';

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
    testDate: Date;

    @Column()
    certificateType: string;

    @Column()
    type: string;

    @Column({ nullable: true })
    description: string;
}
