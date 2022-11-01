import { ApiProperty } from '@nestjs/swagger';
import { SearchRequest } from 'src/shared/search-request';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class PaymentRequest extends SearchRequest {
  @ApiProperty({ type: 'number', required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  account_id: number;

  @ApiProperty({ type: 'number', required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  order_id: number;
}
