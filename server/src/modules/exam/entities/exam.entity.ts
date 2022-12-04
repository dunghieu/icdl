import { Certificate } from 'src/modules/certificate';
import { BaseEntity } from 'src/shared';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Exam extends BaseEntity {
    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    code: string;

    @Column()
    date: Date;

    @Column()
    series: number;

    @Column()
    certificateId: number;

    @ManyToOne(() => Certificate)
    @JoinColumn({ name: 'certificateId', referencedColumnName: 'id' })
    certificate: Certificate;
}
