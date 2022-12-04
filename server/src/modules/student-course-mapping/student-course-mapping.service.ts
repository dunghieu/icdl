import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentCourseMappingDto } from './dto/create-student-course-mapping.dto';
import { UpdateStudentCourseMappingDto } from './dto/update-student-course-mapping.dto';
import { StudentCourseMapping } from './entities/student-course-mapping.entity';

@Injectable()
export class StudentCourseMappingService {
  constructor(@InjectRepository(StudentCourseMapping) private studentCourseMappingRepository: Repository<StudentCourseMapping>) {}

  create(createStudentExamMappingDto: CreateStudentCourseMappingDto) {
    return this.studentCourseMappingRepository.save(createStudentExamMappingDto);
  }

  findAll() {
    return this.studentCourseMappingRepository.find();
  }

  findOne(id: number) {
    return this.studentCourseMappingRepository.findOneBy({id});
  }

  update(id: number, updateStudentExamMappingDto: UpdateStudentCourseMappingDto) {
    return this.studentCourseMappingRepository.update(id, updateStudentExamMappingDto);
  }

  remove(id: number) {
    return this.studentCourseMappingRepository.delete(id);
  }
}
