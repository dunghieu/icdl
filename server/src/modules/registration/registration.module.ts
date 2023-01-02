import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registration } from './entities/registration.entity';
import { EmailService } from '../email';
import { PaymentService } from '../payment/payment.service';
import { Student, StudentService } from '../student';
import { Certificate, CertificateService } from '../certificate';
import { Payment } from '../payment/entities';
import { StudentCourseMapping, StudentCourseMappingService } from '../student-course-mapping';
import { StudentExamMapping, StudentExamMappingService } from '../student-exam-mapping';
import { FileModule } from '../file/file.module';

@Module({
  imports: [TypeOrmModule.forFeature([Registration, Student, Certificate, Payment, StudentCourseMapping, StudentExamMapping]), FileModule],
  controllers: [RegistrationController],
  providers: [RegistrationService, EmailService, StudentService, PaymentService, CertificateService, StudentCourseMappingService, StudentExamMappingService],
  exports: [RegistrationService],
})
export class RegistrationModule {}
