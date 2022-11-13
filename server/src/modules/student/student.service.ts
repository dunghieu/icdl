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
import { RegistrationService } from '../registration';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    private emailService: EmailService,
    private paymentService: PaymentService,
    private registrationService: RegistrationService,
  ) {}

  async findByEmail(email: string): Promise<Student> {
    const student = await this.studentRepository.findOneBy({ email });
    if (!student) {
      throw new NotFoundException('Student not found');
    }

    return student;
  }

  async create(createStudentDto: CreateStudentDto) {
    const isExist = await this.studentRepository.findOneBy({ email: createStudentDto.email, citizenId: createStudentDto.citizenId });
    const amount = createStudentDto.type === StudentType.ON ? 400000 : createStudentDto.type === StudentType.THI ? 1000000 : 1400000;
    if (isExist) {
      await this.registrationService.create({
        studentId: isExist.id,
        type: createStudentDto.type,
        certificateType: createStudentDto.certificateType,
      });
      const paymentIntent = await this.paymentService.createPaymentIntent({
        amount: amount,
        currency: 'vnd',
      });
      await this.paymentService.create({
        studentId: isExist.id,
        intentId: paymentIntent.paymentId,
        amount: amount,
        status: 0,
        secret: paymentIntent.clientSecret,
      });
      await this.emailService.sendInviteEmail(isExist, paymentIntent);
      return paymentIntent;
    }
    const create = this.studentRepository.create(createStudentDto);
    create.code = generateID(4);
    const student = await this.studentRepository.save(create);
    await this.registrationService.create({
      studentId: student.id,
      type: createStudentDto.type,
      certificateType: createStudentDto.certificateType,
    });
    const paymentIntent = await this.paymentService.createPaymentIntent({
      amount: amount,
      currency: 'vnd',
    });
    await this.paymentService.create({
      studentId: student.id,
      intentId: paymentIntent.paymentId,
      amount: amount,
      status: 0,
      secret: paymentIntent.clientSecret,
    });
    await this.emailService.sendInviteEmail(student, paymentIntent);
    return paymentIntent;
  }

  async findAll(query: SearchRequest): Promise<Student[]> {
    try {
      const users = await this.studentRepository.createQueryBuilder('student')
        .innerJoinAndSelect('student.payment', 'payment')
        .innerJoinAndSelect('student.registration', 'registration')
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

  async updateCode(args: { id: string, code: string }) {
    const { id, code } = args;
    const student = await this.studentRepository.findOneBy({ id: +id });
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    student.code = code;
    const result = await this.studentRepository.save(student);
    return result;
  }

  async update(id: number, updateUserDto: UpdateStudentDto) {
    const user = await this.studentRepository.createQueryBuilder('student').innerJoinAndSelect('student.payment', 'payment').where('student.id = :id', { id: id }).getOne();
    const payment = await this.paymentService.findById(41);
    const amount = updateUserDto.type === StudentType.ON ? 400000 : updateUserDto.type === StudentType.THI ? 1000000 : 1400000;
    console.log(user);
    if (updateUserDto.type && payment.amount !== amount) {
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
      // .leftJoinAndSelect('student.payment', 'payment')
      .leftJoinAndSelect('student.studentExamMapping', 'exams')
      .leftJoinAndSelect('exams.exam', 'exam')
      .leftJoinAndSelect('exam.payment', 'examPayment')
      .leftJoinAndSelect('exam.examResult', 'examResult')
      .where('student.code = :code AND student.citizenId = :citizenId')
      .setParameters({
        code: query.code,
        citizenId: query.citizenId,
      })
      .getOne();
  }

  async searchKQ(query): Promise<Student> {
    const repo = this.studentRepository;
    // const { name, email, phone } = query;
    return repo.createQueryBuilder('student')
      .leftJoinAndSelect('student.payment', 'payment')
      .leftJoinAndSelect('student.studentExamMapping', 'exams')
      .leftJoinAndSelect('exams.exam', 'exam')
      .leftJoinAndSelect('exam.examResult', 'examResult')
      .where('student.code = :code AND student.citizenId = :citizenId AND exam.date = :date') // date format: YYYY/MM/DD
      .setParameters({
        code: query.code,
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
