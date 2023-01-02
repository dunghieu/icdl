import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  create() {
    const student = {
      firstName: 'Nguyễn',
      lastName: 'Văn A',
      email: 'hieund.bhsoft@gmail.com',
      avatar: null,
      gender: 'Nam',
      citizenId: '123456789',
      phoneNumber: '123456789',
      dayOfBirth: '1',
      monthOfBirth: '1',
      yearOfBirth: '2000',
      placeOfBirth: 'Hà Nội',
      ethnic: 'Kinh',
      code: '123456789',
      description: '123456789',
      registration: [],
      studentCourseMapping: [],
      studentExamMapping: [],
      id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    };
    const payment = {
      id: 1,
      amount: 1000000,
      created_at: new Date(),
      updated_at: new Date(),
      intentId: '123456789',
      secret: '123456789',
      status: 1,
    };
    return this.emailService.sendInviteEmail(student, payment);
  }

}
