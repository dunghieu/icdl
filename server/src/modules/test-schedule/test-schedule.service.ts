import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestScheduleDto } from './dto/create-test-schedule.dto';
import { UpdateTestScheduleDto } from './dto/update-test-schedule.dto';
import { TestSchedule } from './entities/test-schedule.entity';

@Injectable()
export class TestScheduleService {
  constructor(
    @InjectRepository(TestSchedule)
    private testScheduleRepository: Repository<TestSchedule>,
  ) {}

  create(createTestScheduleDto: CreateTestScheduleDto) {
    return this.testScheduleRepository.save(createTestScheduleDto);
  }

  findAll() {
    return this.testScheduleRepository.find();
  }

  findById(id: number) {
    return this.testScheduleRepository.findOneBy({id});
  }

  update(id: number, updateTestScheduleDto: UpdateTestScheduleDto) {
    return this.testScheduleRepository.update(id, updateTestScheduleDto);
  }

  remove(id: number) {
    return `This action removes a #${id} testSchedule`;
  }
}
