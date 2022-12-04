import { IsNumberString, IsString } from 'class-validator';

export class CourseDto {
  @IsString()
  name: string;

  @IsString()
  day: string;

  @IsString()
  start: string;

  @IsString()
  end: string;

  @IsString()
  open: Date;

  @IsNumberString()
  certificateId: number;

  // subjects: SubjectDto[];
}