import { Student } from 'src/modules/student';
import { BaseEntity } from 'src/shared';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Registration extends BaseEntity{
    @Column()
    @ManyToOne(() => Student, (student) => student.id)
    @JoinColumn({ name: 'studentId', referencedColumnName: 'id'})
    studentId: number;

    @Column()
    type: string;

    @Column()
    certificateType: string;
}
