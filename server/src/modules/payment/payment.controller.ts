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
    // Gọi đến service để gửi request tới Stripe API xác nhận thanh toán
    const result = await this.paymentService.confirmPaymentIntent(
      body.intentId,
    );
    // Nếu thanh toán thành công thì cập nhật trạng thái thanh toán thành công
    if (result.status === 'succeeded') {
      const payment = await this.paymentService.update(body.intentId, { status: 1 });
      const registration = await this.registrationService.findOneBy({
        paymentId: payment.id,
      });
      // Nếu hình thức đăng ký là ôn thì tạo mới bản ghi trong bảng student-course-mapping
      if (registration.type === StudentType.ON) {
        await this.studentCourseMappingService.create({
          studentId: registration.student.id,
          courseId: registration.courseId,
        });
      }
    }
    // Trả về trạng thái thanh toán
    return result.status;
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
