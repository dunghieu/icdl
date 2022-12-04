import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// application
import { Payment } from './entities';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { RegistrationModule } from '../registration';
import { StudentCourseMappingModule } from '../student-course-mapping';

@Module({
  imports: [TypeOrmModule.forFeature([Payment]), RegistrationModule, StudentCourseMappingModule],
  providers: [PaymentService],
  controllers: [PaymentController],
  exports: [PaymentService],
})
export class PaymentModule {}
