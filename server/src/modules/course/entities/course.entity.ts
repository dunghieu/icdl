import { Student } from 'src/modules/student';
import { BaseEntity } from 'src/shared';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Course extends BaseEntity{
  @Column()
  name: string;

  @Column()
  day: string;

  @Column()
  code: string;

  @Column()
  start: string;

  @Column()
  end: string;

  @Column()
  open: Date;

  @Column()
  certificateId: number;

  @Column()
  status: number;

  @ManyToMany(() => Student)
  @JoinTable({
    name: 'student_course_mapping',
    joinColumn: {
      name: 'courseId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'studentId',
      referencedColumnName: 'id',
    },
  })
  students: Student[];
}
