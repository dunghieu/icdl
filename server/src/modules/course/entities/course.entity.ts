import { BaseEntity } from 'src/shared';
import { Column, Entity } from 'typeorm';

@Entity()
export class Course extends BaseEntity{
    @Column()
    name: string;

  // @Column()
  // subjects: SubjectDto[];
}
