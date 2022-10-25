import { IsNumber } from 'class-validator';

export class ExamResultDto{
    @IsNumber()
    studentId: number;

    @IsNumber()
    examId: number;

    @IsNumber()
    theoreticalScore: number;

    @IsNumber()
    practicalScore: number;

    @IsNumber()
    status: number;
}