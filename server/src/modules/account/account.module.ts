import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { AccountSubscriber } from 'src/providers/account-subcriber';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountController],
  exports: [AccountService],
  providers: [AccountService, AccountSubscriber]
})
export class AccountModule {}
