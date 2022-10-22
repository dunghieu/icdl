import {
  IsOptional,
  IsString, Matches,
} from 'class-validator';

export class StudentDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  gender: string;

  @IsString()
  citizenId: string;

  @IsString()
  studentId: string;

  @IsString()
  class: string;

  @IsString()
  dayOfBirth: string;

  @IsString()
  monthOfBirth: string;

  @IsString()
  yearOfBirth: string;

  @IsString()
  placeOfBirth: string;

  @IsString()
  @Matches(/((84|0)[3|5|7|8|9])+([0-9]{8})\b/, { message: 'Phone number is not valid' })
  phoneNumber: string;

  @IsString()
  ethnic: string;

  @IsString()
  type: string;

  @IsOptional()
  description: string;
}
