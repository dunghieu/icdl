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

  // @IsString()
  // @Matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/, { message: 'Invalid date format' })
  // testDate: string;
  @IsNotEmpty()
  @IsString()
  certificateType: string;

  @IsEnum(StudentType)
  type: StudentType;

  @IsOptional()
  description: string;
}
