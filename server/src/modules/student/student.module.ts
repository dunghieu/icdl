import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Student } from './entities/student.entity';
import { EmailService } from '../email';
import { PaymentModule } from '../payment/payment.module';
import { Registration, RegistrationModule, RegistrationService } from '../registration';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Registration]), PaymentModule],
  controllers: [StudentController],
  exports: [StudentService],
  providers: [StudentService, EmailService, RegistrationService]
})
export class StudentModule {}
