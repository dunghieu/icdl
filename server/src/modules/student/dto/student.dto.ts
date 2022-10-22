import {
  IsNotEmpty, IsOptional,
} from 'class-validator';

export class StudentDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  studentId: string;

  @IsNotEmpty()
  class: string;

  @IsNotEmpty()
  dayOfBirth: string;

  @IsNotEmpty()
  monthOfBirth: string;

  @IsNotEmpty()
  yearOfBirth: string;

  @IsNotEmpty()
  placeOfBirth: string;

  @IsNotEmpty()
  phoneNumber: string;

  @IsNotEmpty()
  ethnic: string;

}
