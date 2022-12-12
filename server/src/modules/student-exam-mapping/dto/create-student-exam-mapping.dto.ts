import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class CreateStudentExamMappingDto {
    @IsNumberString()
    examId: number;

    @IsNumberString()
    studentId: number;

    @IsString()
    @IsOptional()
    room?: string;

    @IsString()
    @IsOptional()
    sbd?: number;

    @IsString()
    @IsOptional()
    start?: string;

    @IsString()
    @IsOptional()
    end?: string;

    @IsNumberString()
    @IsOptional()
    theoreticalScore?: number;

    @IsNumberString()
    @IsOptional()
    practicalScore?: number;

    @IsNumberString()
    @IsOptional()
    status?: number;
}
