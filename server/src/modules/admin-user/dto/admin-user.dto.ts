import { IsNotEmpty } from 'class-validator';

export class AdminUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  adminId: string;

}