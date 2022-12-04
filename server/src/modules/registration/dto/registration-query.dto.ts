import { IsNumberString, IsOptional } from 'class-validator';

export class RegistrationQueryDto {
    @IsOptional()
    status?: number;

    @IsOptional()
    type?: string;
}