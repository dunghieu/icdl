import { IsNumberString, IsOptional } from 'class-validator';

export class StudentExamMappingQueryDto{
    @IsOptional()
    @IsNumberString()
    studentId?: number;

    @IsOptional()
    @IsNumberString()
    examId?: number;

    @IsOptional()
    status?: number;

    @IsOptional()
    status2?: number;
}