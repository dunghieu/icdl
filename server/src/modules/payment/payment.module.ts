import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// application
import { Payment } from './entities';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Payment]),
  ],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}
