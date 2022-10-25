import { IsString } from 'class-validator';

export class CourseDto {
  @IsString()
  name: string;

  // subjects: SubjectDto[];
}