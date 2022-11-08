import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentExamMappingDto } from './dto/create-student-exam-mapping.dto';
import { UpdateStudentExamMappingDto } from './dto/update-student-exam-mapping.dto';
import { StudentExamMapping } from './entities/student-exam-mapping.entity';

@Injectable()
export class StudentExamMappingService {
  constructor(@InjectRepository(StudentExamMapping) private studentExamMappingRepository: Repository<StudentExamMapping>) {}

  create(createStudentExamMappingDto: CreateStudentExamMappingDto) {
    return this.studentExamMappingRepository.save(createStudentExamMappingDto);
  }

  findAll() {
    return this.studentExamMappingRepository.find();
  }

  findOne(id: number) {
    return this.studentExamMappingRepository.findOneBy({id});
  }

  update(id: number, updateStudentExamMappingDto: UpdateStudentExamMappingDto) {
    return this.studentExamMappingRepository.update(id, updateStudentExamMappingDto);
  }

  remove(id: number) {
    return this.studentExamMappingRepository.delete(id);
  }
}
