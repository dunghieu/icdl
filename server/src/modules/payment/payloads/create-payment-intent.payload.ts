import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreatePaymentIntentPayload {
  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  currency: string;
}
