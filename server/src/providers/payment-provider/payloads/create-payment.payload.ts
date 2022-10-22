import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
export class CreatePaymentPayload {
  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  @IsNumber()
  account_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  order_id: number;

  @ApiProperty({ type: 'string', required: false })
  @IsOptional()
  status: string;

  @ApiProperty({ type: 'number', required: false })
  @IsNotEmpty()
  @IsNumber()
  transaction_amt: number;

  @ApiProperty({ type: 'string', required: false })
  @IsOptional()
  description: string;

  @ApiProperty({ type: 'string', required: false })
  @IsOptional()
  payment_method: string;

  @ApiProperty({ type: 'string', required: false })
  @IsOptional()
  charge_id: string;
  @ApiProperty({ type: 'string', required: false })
  @IsOptional()
  transaction_type: string;
  @ApiProperty({ type: 'string', required: false })
  @IsOptional()
  transaction_description: string;

  @ApiProperty({ type: 'string', example: 'YYYY-MM-DD', required: false })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  date: Date;
}
