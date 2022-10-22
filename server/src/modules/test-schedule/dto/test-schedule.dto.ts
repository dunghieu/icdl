import { IsNotEmpty } from 'class-validator';

export class TestScheduleDto {
    @IsNotEmpty()
    testId: number;

    @IsNotEmpty()
    testDate: string;

    @IsNotEmpty()
    testTime: string;

    @IsNotEmpty()
    testRoom: string;

    @IsNotEmpty()
    testDuration: string;

    @IsNotEmpty()
    testType: string;

    @IsNotEmpty()
    testStatus: string;
}