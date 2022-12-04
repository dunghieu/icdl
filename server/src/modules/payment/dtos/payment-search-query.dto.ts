import { IsNumberString, IsOptional } from 'class-validator';

export class PaymentSearchQueryDto {
    @IsOptional()
    intentId?: string;

    @IsOptional()
    id?: number;

    @IsOptional()
    @IsNumberString()
    status?: number;
}