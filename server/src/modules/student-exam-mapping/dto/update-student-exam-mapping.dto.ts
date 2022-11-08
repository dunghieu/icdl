import { PartialType } from '@nestjs/swagger';
import { CreateStudentExamMappingDto } from './create-student-exam-mapping.dto';

export class UpdateStudentExamMappingDto extends PartialType(CreateStudentExamMappingDto) {}
