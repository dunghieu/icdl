import { IsOptional, IsString } from 'class-validator';

export class EthnicDto {
    @IsString()
    name: string;

    @IsOptional()
    description: string;
}