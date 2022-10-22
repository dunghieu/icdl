import { Module } from '@nestjs/common';
import { EthnicService } from './ethnic.service';
import { EthnicController } from './ethnic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ethnic } from './entities/ethnic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ethnic])],
  controllers: [EthnicController],
  providers: [EthnicService],
  exports: [EthnicService],
})
export class EthnicModule {}
