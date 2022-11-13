import { Controller, Post, Body, Get, Param} from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async create(@Body() body) {
    const result = await this.paymentService.confirmPaymentIntent(body.intentId);
    if (result.status === 'succeeded') {
      await this.paymentService.update(body.intentId, { status: 1 });
    }
    return result;
  }

  @Get(':intentId')
  async findByIntentId(@Param('intentId') intentId: string) {
    return this.paymentService.findByIntentId(intentId);
  }

  @Post('generate')
  async generate() {
    return this.paymentService.generate();
  }

}
