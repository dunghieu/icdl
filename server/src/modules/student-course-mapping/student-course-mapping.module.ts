import { Module } from '@nestjs/common';
import { StudentCourseMappingService } from './student-course-mapping.service';
import { StudentCourseMappingController } from './student-course-mapping.controller';

@Module({
  controllers: [StudentCourseMappingController],
  providers: [StudentCourseMappingService]
})
export class StudentCourseMappingModule {}
