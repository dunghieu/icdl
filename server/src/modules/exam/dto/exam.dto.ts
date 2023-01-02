import { IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from 'class-validator';

export class ExamDto {
    @IsOptional()
    @IsNumber()
    id?: number;

    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    code: string;

    @IsNotEmpty()
    @Matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/, { message: 'Invalid date format' })
    date: Date;

    @IsNotEmpty()
    certificateId: number;

  // @IsNotEmpty()
  // @Matches(/^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/, { message: 'Invalid time format' })
  // startTime: string;

  // @IsNotEmpty()
  // @Matches(/^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/, { message: 'Invalid time format' })
  // endTime: string;

}