import { IsNumber, IsString } from 'class-validator';

export class PaymentDto {
  @IsNumber()
  studentId: number;

  @IsString()
  paymentId: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  status: number;
}
