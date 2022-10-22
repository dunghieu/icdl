import { Module } from '@nestjs/common';
import { TestScheduleService } from './test-schedule.service';
import { TestScheduleController } from './test-schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestSchedule } from './entities/test-schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestSchedule])],
  controllers: [TestScheduleController],
  providers: [TestScheduleService],
  exports: [TestScheduleService],
})
export class TestScheduleModule {}
