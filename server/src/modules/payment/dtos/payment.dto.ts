import { IsNumber, IsString } from 'class-validator';

export class PaymentDto {
  @IsNumber()
  studentId: number;

  @IsString()
  intentId: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  status: number;
}
