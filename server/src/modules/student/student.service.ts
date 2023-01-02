/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { SearchRequest } from 'src/shared/search-request';
import { StudentType } from 'src/shared';
import { generateID } from 'src/utils/Helper';
import { StudentCourseMappingService } from '../student-course-mapping';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    private studentCourseMappingService: StudentCourseMappingService,
  ) {}

  async findByEmail(email: string): Promise<Student> {
    const student = await this.studentRepository.findOneBy({ email });
    if (!student) {
      throw new NotFoundException('Student not found');
    }

    return student;
  }

  async isExist(args: { email: string, citizenId: string}): Promise<Student> {
    return this.studentRepository.findOneBy({ email: args.email, citizenId: args.citizenId });
  }

  async create(createStudentDto: CreateStudentDto) {
    const create = this.studentRepository.create(createStudentDto);
    create.code = generateID(4);
    return this.studentRepository.save(create);
  }

  async findAll(query: SearchRequest): Promise<Student[]> {
    try {
      const users = await this.studentRepository.createQueryBuilder('student')
        .leftJoinAndSelect('student.studentExamMapping', 'examMapping')
        .leftJoinAndSelect('student.studentCourseMapping', 'courseMapping')
        .getMany();
      return users;
    } catch (error) {
      switch (error.code) {
        case 'ER_NO_SUCH_TABLE':
          throw new InternalServerErrorException('Table does not exist');
        case 'ER_BAD_FIELD_ERROR':
          throw new InternalServerErrorException(error.sqlMessage);
        default:
          throw new BadRequestException('Something went wrong');
      }
    }
  }

  async findById(id: number): Promise<Student> {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new NotFoundException('Student not found');
    }

    return student;

  }

  async getDanhSachThi(): Promise<Student[]> {
    const repo = this.studentRepository;
    const result = await repo.createQueryBuilder('student')
      .innerJoinAndSelect('student.payment', 'payment')
      .where('student.type = :type', { type: StudentType.THI })
      .andWhere('payment.status = :status', { status: 1 })
      .getMany();
    return result;
  }

  async update(id: number, updateUserDto: UpdateStudentDto) {
    const student = await this.studentRepository.findOneBy({ id: +id });
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    Object.assign(student, updateUserDto);
    return this.studentRepository.save(student);
  }

  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }

  async search(query): Promise<Student> {
    const repo = this.studentRepository;
    const result = await repo.createQueryBuilder('s')
    // Nối các bảng thông tin cần thiết
      .addSelect(['s.id', 'registration', 'student.id'])
      .leftJoin('s.registration', 'registration')
      .leftJoin('registration.student', 'student')
      .leftJoinAndSelect('registration.payment', 'payment')
      .leftJoinAndSelect('registration.course', 'courseStandAlone')
      .leftJoinAndSelect('student.studentCourseMapping', 'courses')
      .leftJoinAndSelect('courses.course', 'course')
      .leftJoinAndSelect('registration.certificate', 'certificate')
      .leftJoinAndSelect('student.studentExamMapping', 'exams')
      .leftJoinAndSelect('exams.exam', 'exam')
      // Điều kiện tra cứu, yêu cầu thí sinh nhập đúng mã xác nhận và số CMND
      .where('s.code = :code AND s.citizenId = :citizenId')
      .setParameters({
        code: query.code,
        citizenId: query.citizenId,
      })
      .getOne();
    // Xử lý dữ liệu đầ ra
    if (result) {
      result.registration = await Promise.all(result.registration.map(async (reg) => {
        delete reg.student.id;
        if (reg.type === StudentType.ON) {
          delete reg.student.studentExamMapping;
          const total = await this.studentCourseMappingService.findAll({
            courseId: reg.courseId,
          });
          Object.assign(reg, { total: total.length });
          return reg;
        }
        if (reg.type === StudentType.THI) {
          delete reg.student.studentCourseMapping;
          return reg;
        }
      }));
    }
    return result;
  }

  async searchOn(query): Promise<Student> {
    const repo = this.studentRepository;
    const result = await repo.createQueryBuilder('s')
      .leftJoinAndSelect('s.registration', 'registration')
      .leftJoinAndSelect('registration.student', 'student')
      .leftJoinAndSelect('registration.payment', 'payment')
      .leftJoinAndSelect('student.studentCourseMapping', 'courses')
      .leftJoinAndSelect('courses.course', 'course')
      .where('student.code = :code AND student.citizenId = :citizenId')
      .setParameters({
        code: query.code,
        citizenId: query.citizenId,
      })
      .getOne();
    result.registration = result.registration.filter((reg) => reg.type === StudentType.ON);
    result.registration = await Promise.all(result.registration.map(async (reg) => {
      const total = await this.studentCourseMappingService.findAll({
        courseId: reg.courseId,
      });
      Object.assign(reg, { total: total.length });
      return reg;
    }));
    return result;
  }

  async searchThi(query): Promise<Student> {
    const repo = this.studentRepository;
    // const { name, email, phone } = query;
    const result = await repo.createQueryBuilder('s')
      .leftJoinAndSelect('s.registration', 'registration')
      .leftJoinAndSelect('registration.payment', 'payment')
      .leftJoinAndSelect('registration.certificate', 'certificate')
      .leftJoinAndSelect('registration.student', 'student')
      .leftJoinAndSelect('student.studentExamMapping', 'exams')
      .leftJoinAndSelect('exams.exam', 'exam')
      .where('student.code = :code AND student.citizenId = :citizenId')
      .setParameters({
        code: query.code,
        citizenId: query.citizenId,
      })
      .getOne();
    if (!result) {
      throw new NotFoundException('Student not found');
    }
    result.registration = result.registration?.filter((reg) => reg.type === StudentType.THI);
    return result;
  }

  async searchKQ(query): Promise<Student> {
    const repo = this.studentRepository;
    const firstName = query?.name?.split(' ').slice(0, -1).join(' ');
    const lastName = query?.name?.split(' ').slice(-1).toString();
    return repo.createQueryBuilder('student')
      .leftJoinAndSelect('student.studentExamMapping', 'exams')
      .leftJoinAndSelect('exams.exam', 'exam')
      .where('student.firstName = :firstName AND student.lastName = :lastName AND student.citizenId = :citizenId AND exam.date = :date') // date format: YYYY/MM/DD
      .setParameters({
        firstName: firstName,
        lastName: lastName,
        citizenId: query.citizenId,
        date: query.date,
      })
      .getOne();
  }

  async searchTC(query): Promise<Student> {
    const repo = this.studentRepository;
    // const { name, email, phone } = query;
    return repo.createQueryBuilder('student')
      .leftJoinAndSelect('student.payment', 'payment')
      .where('student.code = :code AND student.citizenId = :citizenId')
      .setParameters({
        code: query.code,
        citizenId: query.citizenId,
      })
      .getOne();
  }
}
