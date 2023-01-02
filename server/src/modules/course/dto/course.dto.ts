import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class CourseDto {
  @IsOptional()
  id?: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  code?: string;

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