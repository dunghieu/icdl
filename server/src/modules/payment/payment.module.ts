import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// application
import { PaymentEntity } from './entities';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentEntity]),
  ],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}
