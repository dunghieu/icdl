import { Module } from '@nestjs/common';
import { StudentCourseMappingService } from './student-course-mapping.service';
import { StudentCourseMappingController } from './student-course-mapping.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentCourseMapping } from './entities/student-course-mapping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentCourseMapping])],
  controllers: [StudentCourseMappingController],
  providers: [StudentCourseMappingService],
  exports: [StudentCourseMappingService],
})
export class StudentCourseMappingModule {}
