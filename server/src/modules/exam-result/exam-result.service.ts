import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExamResultDto } from './dto/create-exam-result.dto';
import { UpdateExamResultDto } from './dto/update-exam-result.dto';
import { ExamResult } from './entities/exam-result.entity';

@Injectable()
export class ExamResultService {
  constructor(@InjectRepository(ExamResult) private examResultRepository: Repository<ExamResult>
  ) {}

  create(createExamResultDto: CreateExamResultDto) {
    return this.examResultRepository.save(createExamResultDto);
  }

  findAll() {
    return this.examResultRepository.find();
  }

  findOne(id: number) {
    return this.examResultRepository.findOneBy({id});
  }

  update(id: number, updateExamResultDto: UpdateExamResultDto) {
    return this.examResultRepository.update(id, updateExamResultDto);
  }

  remove(id: number) {
    return this.examResultRepository.delete(id);
  }
}
