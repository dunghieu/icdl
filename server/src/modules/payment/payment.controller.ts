import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { StudentType } from 'src/shared';
import { RegistrationService } from '../registration/registration.service';
import { StudentCourseMappingService } from '../student-course-mapping/student-course-mapping.service';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly registrationService: RegistrationService,
    private readonly studentCourseMappingService: StudentCourseMappingService,
  ) {}

  @Post()
  async create(@Body() body) {
    const result = await this.paymentService.confirmPaymentIntent(
      body.intentId,
    );
    if (result.status === 'succeeded') {
      const payment = await this.paymentService.update(body.intentId, { status: 1 });
      const registration = await this.registrationService.findOne(payment.id);
      if (registration.type !== StudentType.THI) {
        await this.studentCourseMappingService.create({
          studentId: registration.student.id,
          courseId: registration.courseId,
        });
      }
    }
    return result;
  }

  @Get(':intentId')
  async findByIntentId(@Param('intentId') intentId: string) {
    return this.paymentService.findByIntentId(intentId);
  }

  // @Post('generate')
  // async generate() {
  //   return this.paymentService.generate();
  // }
}
