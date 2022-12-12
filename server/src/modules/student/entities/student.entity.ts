import { Registration } from 'src/modules/registration/entities/registration.entity';
import { StudentCourseMapping } from 'src/modules/student-course-mapping';
import { StudentExamMapping } from 'src/modules/student-exam-mapping';
import { BaseEntity } from 'src/shared';
import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class Student extends BaseEntity {
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

  @Column({ nullable: true })
  code: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => StudentExamMapping, (studentExamMapping) => studentExamMapping.student,)
  studentExamMapping: StudentExamMapping[];

  @OneToMany(() => StudentCourseMapping, (studentCourseMapping) => studentCourseMapping.student,)
  studentCourseMapping: StudentCourseMapping[];

  @OneToMany(() => Registration, (registration) => registration.student,)
  registration: Registration[];

  // status: number;
}
