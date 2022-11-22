import { Injectable } from '@nestjs/common';
import { CreateStudentCourseMappingDto } from './dto/create-student-course-mapping.dto';
import { UpdateStudentCourseMappingDto } from './dto/update-student-course-mapping.dto';

@Injectable()
export class StudentCourseMappingService {
  create(createStudentCourseMappingDto: CreateStudentCourseMappingDto) {
    return 'This action adds a new studentCourseMapping';
  }

  findAll() {
    return `This action returns all studentCourseMapping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentCourseMapping`;
  }

  update(id: number, updateStudentCourseMappingDto: UpdateStudentCourseMappingDto) {
    return `This action updates a #${id} studentCourseMapping`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentCourseMapping`;
  }
}
