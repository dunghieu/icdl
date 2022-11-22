import { PartialType } from '@nestjs/swagger';
import { CreateStudentCourseMappingDto } from './create-student-course-mapping.dto';

export class UpdateStudentCourseMappingDto extends PartialType(CreateStudentCourseMappingDto) {}
