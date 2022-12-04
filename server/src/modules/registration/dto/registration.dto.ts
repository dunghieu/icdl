import { IsEmpty, IsNotEmpty, IsOptional } from 'class-validator';

export class RegistrationDto{
    @IsNotEmpty()
    studentId: number;

    @IsNotEmpty()
    type: string;

    @IsOptional()
    certificateId?: number;

    @IsNotEmpty()
    paymentId: number;

    @IsEmpty()
    status?: number;

    @IsEmpty()
    courseId?: number;
}