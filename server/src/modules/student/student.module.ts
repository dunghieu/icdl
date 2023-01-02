import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Student } from './entities/student.entity';
import { StudentCourseMappingModule } from '../student-course-mapping/student-course-mapping.module';

@Module({
  imports: [TypeOrmModule.forFeature([Student]), StudentCourseMappingModule],
  controllers: [StudentController],
  exports: [StudentService],
  providers: [StudentService]
})
export class StudentModule {}
