import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// application
import { Payment } from './entities';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Payment]),
  ],
  providers: [PaymentService],
  controllers: [PaymentController],
  exports: [PaymentService],
})
export class PaymentModule {}
