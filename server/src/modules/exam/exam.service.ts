import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';

@Injectable()
export class ExamService {
  constructor(@InjectRepository(Exam) private examRepository: Repository<Exam>) {}

  create(createExamDto: CreateExamDto) {
    const exam = this.examRepository.create(createExamDto);
    return this.examRepository.save(exam);
  }

  findAll() {
    return this.examRepository.find();
  }

  findOneBy(id: number) {
    return this.examRepository.createQueryBuilder('exam')
      .innerJoinAndSelect('exam.examResult', 'examResult')
      .where('exam.id = :id', { id })
      .getOne();
  }

  update(id: number, updateExamDto: UpdateExamDto) {
    return this.examRepository.update(id, updateExamDto);
  }

  remove(id: number) {
    return this.examRepository.delete(id);
  }
}
