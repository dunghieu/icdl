import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthService } from './';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { AccountService } from '../account';
import { StudentService } from '../student';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly studentService: StudentService,
    private readonly accountService: AccountService,
  ) {}

  @Post('login')
  async login(@Body() payload: LoginDto): Promise<any> {
    const user = await this.authService.validateUser(payload);
    return await this.authService.createToken(user);
  }

  @Post('register')
  async register(@Body() payload: RegisterDto): Promise<any> {
    const account = await this.accountService.create(payload);
    const student = await this.studentService.create(payload);
    await this.studentService.update(student.id, {accountId: account.id});
    await this.accountService.update(account.id, {referenceId: student.id});
    return await this.authService.createToken(account);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getLoggedInUser(@Request() req): Promise<any> {
    return req.user;
  }
}
