import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Student } from './entities/student.entity';
import { EmailService } from '../email';
import { PaymentModule } from '../payment/payment.module';

@Module({
  imports: [TypeOrmModule.forFeature([Student]), PaymentModule],
  controllers: [StudentController],
  exports: [StudentService],
  providers: [StudentService, EmailService,]
})
export class StudentModule {}
