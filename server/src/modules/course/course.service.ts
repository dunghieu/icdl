import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import * as moment from 'moment';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  create(createCourseDto: CreateCourseDto) {
    const create = this.courseRepository.create(createCourseDto);
    create.code = 'C' + Math.floor(Math.random() * 100000);
    return this.courseRepository.save(create);
  }

  findAll() {
    return this.courseRepository.find({
      relations: ['students'],
    });
  }

  async findAvailableCourses() {
    const course = await this.findAll();
    const availableCourses = course.filter((course) => {
      const courseDate = moment(course.open).add(7, 'days').format('YYYY-MM-DD') ;
      const today = moment().format('YYYY-MM-DD');
      return courseDate >= today;
    });

    return availableCourses;
  }

  findById(id: number) {
    return this.courseRepository.findOneBy({id});
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.courseRepository.update(id, updateCourseDto);
  }

  remove(id: number) {
    return this.courseRepository.delete(id);
  }
}
