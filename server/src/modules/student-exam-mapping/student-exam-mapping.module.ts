import { Module } from '@nestjs/common';
import { StudentExamMappingService } from './student-exam-mapping.service';
import { StudentExamMappingController } from './student-exam-mapping.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentExamMapping } from './entities/student-exam-mapping.entity';
import { FileModule } from '../file/file.module';

@Module({
  imports: [TypeOrmModule.forFeature([StudentExamMapping]), FileModule],
  controllers: [StudentExamMappingController],
  providers: [StudentExamMappingService],
  exports: [StudentExamMappingService],
})
export class StudentExamMappingModule {}
