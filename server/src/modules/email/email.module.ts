import { Module } from '@nestjs/common';
import { ConfigModule } from './../config';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';

@Module({
  imports: [
    ConfigModule,
  ],
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
