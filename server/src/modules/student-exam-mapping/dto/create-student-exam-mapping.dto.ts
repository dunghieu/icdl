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
    practicalScore1?: number;

    @IsNumberString()
    @IsOptional()
    practicalScore2?: number;

    @IsNumberString()
    @IsOptional()
    practicalScore3?: number;

    @IsNumberString()
    @IsOptional()
    status?: number;

    @IsNumberString()
    @IsOptional()
    entry?: number;
}
