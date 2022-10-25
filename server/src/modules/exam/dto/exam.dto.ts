import { IsNotEmpty, IsString } from 'class-validator';

export class ExamDto {
    @IsString()
    name: string;

    @IsString()
    code: string;

    @IsString()
    instruction: string;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    startTime: Date;

    @IsNotEmpty()
    endTime: Date;
}