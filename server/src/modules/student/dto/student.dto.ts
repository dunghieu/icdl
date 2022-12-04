import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString, Matches,
} from 'class-validator';
import { CityEnum, EthnicEnum, StudentType } from 'src/shared';

export class StudentDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsString()
  citizenId: string;

  @IsNotEmpty()
  @IsString()
  dayOfBirth: string;

  @IsNotEmpty()
  @IsString()
  monthOfBirth: string;

  @IsNotEmpty()
  @IsString()
  yearOfBirth: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(CityEnum)
  placeOfBirth: CityEnum;

  @IsNotEmpty()
  @IsString()
  @Matches(/((84|0)[3|5|7|8|9])+([0-9]{8})\b/, { message: 'Phone number is not valid' })
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(EthnicEnum)
  ethnic: EthnicEnum;

  @IsNotEmpty()
  certificateId: number;

  @IsEnum(StudentType)
  type: StudentType;

  @IsOptional()
  description: string;

  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
