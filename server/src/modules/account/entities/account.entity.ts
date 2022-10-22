import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from 'src/shared';
import { Student } from 'src/modules/student';

@Entity()
export class Account extends BaseEntity{
    @Column()
    email: string;

    @Column()
    password: string;

    @Column({default: 'student'})
    role: string;

    @Column()
    referenceId: number;
}
