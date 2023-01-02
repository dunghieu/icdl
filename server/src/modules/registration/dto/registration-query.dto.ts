import { IsNumberString, IsOptional } from 'class-validator';

export class RegistrationQueryDto {
    @IsOptional()
    paymentId?: number;

    @IsOptional()
    status?: number;

    @IsOptional()
    type?: string;
}