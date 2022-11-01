import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Sort } from './constants';

export class SearchRequest {
  @IsOptional()
  @IsString()
  q = '';

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit = 10;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  offset = 0;

  @IsOptional()
  @IsString()
  sortBy = 'created_at';

  @IsOptional()
  @IsEnum(Sort)
  sort: Sort = Sort.DESC;
}
