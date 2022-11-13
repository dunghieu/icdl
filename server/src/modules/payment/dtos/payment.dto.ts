import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PaymentDto {
  @IsNumber()
  studentId: number;

  @IsString()
  intentId: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  status: number;

  @IsString()
  secret: string;

  @IsNumber()
    @IsOptional()
  examId?: number;

  @IsNumber()
    @IsOptional()
  courseId?: number;
}
