/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { EmailService } from '../email';
import { PaymentService } from '../payment/payment.service';
import { SearchRequest } from 'src/shared/search-request';
import { StudentType } from 'src/shared';
import { generateID } from 'src/utils/Helper';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    private emailService: EmailService,
    private paymentService: PaymentService
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const create = this.studentRepository.create(createStudentDto);
    create.code = generateID(4);
    const student = await this.studentRepository.save(create);
    const amount = createStudentDto.type === StudentType.ON ? 400000 : createStudentDto.type === StudentType.THI ? 1000000 : 1400000;
    const paymentIntent = await this.paymentService.createPaymentIntent({
      amount: amount,
      currency: 'vnd',
    });
    const payment = await this.paymentService.create({
      studentId: student.id,
      intentId: paymentIntent.paymentId,
      amount: amount,
      status: 0,
    });

    await this.emailService.sendInviteEmail(student, paymentIntent);
    return paymentIntent;
  }

  async findAll(query: SearchRequest): Promise<Student[]> {
    try {
      const users = await this.studentRepository.createQueryBuilder('student')
        .innerJoinAndSelect('student.payment', 'payment')
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
    const user = await this.studentRepository.createQueryBuilder('student').innerJoinAndSelect('student.payment', 'payment').where('student.id = :id', { id: id }).getOne();
    if (updateUserDto.type && user.type !== updateUserDto.type) {
      const amount = updateUserDto.type === StudentType.ON ? 400000 : updateUserDto.type === StudentType.THI ? 1000000 : 1400000;
      const paymentIntent = await this.paymentService.createPaymentIntent({
        amount: amount,
        currency: 'vnd',
      });
      await this.paymentService.update(user.payment.id, {
        intentId: paymentIntent.paymentId,
        amount: amount,
      });
    }
    const updatedUser = Object.assign(user, updateUserDto);
    const result = await this.studentRepository.save(updatedUser);
    return result;
  }

  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }

  async search(query): Promise<Student> {
    const repo = this.studentRepository;
    // const { name, email, phone } = query;
    return repo.createQueryBuilder('student')
      .leftJoinAndSelect('student.payment', 'payment')
      .leftJoinAndSelect('student.studentExamMapping', 'exams')
      .where('student.code = :code AND student.citizenId = :citizenId')
      .setParameters({
        code: query.code,
        citizenId: query.citizenId,
      })
      .getOne();
  }
}
