import { Module } from '@nestjs/common';
import { ExamResultService } from './exam-result.service';
import { ExamResultController } from './exam-result.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamResult } from './entities/exam-result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExamResult])],
  controllers: [ExamResultController],
  providers: [ExamResultService],
  exports: [ExamResultService],
})
export class ExamResultModule {}
