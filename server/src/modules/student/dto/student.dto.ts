import {
  IsEnum,
  IsOptional,
  IsString, Matches,
} from 'class-validator';
import { CityEnum, EthnicEnum, StudentType } from 'src/shared';

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
  dayOfBirth: string;

  @IsString()
  monthOfBirth: string;

  @IsString()
  yearOfBirth: string;

  @IsString()
  @IsEnum(CityEnum)
  placeOfBirth: CityEnum;

  @IsString()
  @Matches(/((84|0)[3|5|7|8|9])+([0-9]{8})\b/, { message: 'Phone number is not valid' })
  phoneNumber: string;

  @IsString()
  email: string;

  @IsString()
  @IsEnum(EthnicEnum)
  ethnic: EthnicEnum;

  @IsString()
  @Matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/, { message: 'Invalid date format' })
  testDate: string;

  @IsString()
  certificateType: string;

  @IsEnum(StudentType)
  type: StudentType;

  @IsOptional()
  description: string;
}
