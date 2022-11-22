import { IsNotEmpty } from 'class-validator';

export class RegistrationDto{
    @IsNotEmpty()
    studentId: number;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    certificateId: number;
}