import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentType } from 'src/shared';
import { Repository } from 'typeorm';
import { CertificateService } from '../certificate';
import { EmailService } from '../email';
import { PaymentService } from '../payment/payment.service';
import { StudentService } from '../student';
import { StudentCourseMappingService } from '../student-course-mapping';
import { StudentExamMappingService } from '../student-exam-mapping';
import { CreateStudentDto } from '../student/dto';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { RegistrationQueryDto } from './dto/registration-query.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { Registration } from './entities/registration.entity';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Registration)
    private registrationRepository: Repository<Registration>,
    private studentService: StudentService,
    private paymentService: PaymentService,
    private emailService: EmailService,
    private studentCourseMappingService: StudentCourseMappingService,
    private studentExamMappingService: StudentExamMappingService,
    private certificateService: CertificateService,
  ){}

  async create(createRegistrationDto: CreateRegistrationDto) {
    const params = {
      studentId: createRegistrationDto.studentId,
      type: createRegistrationDto.type,
      certificateId: createRegistrationDto.certificateId,
    };
    const regist = await this.registrationRepository.createQueryBuilder()
      .where('studentId = :studentId AND type = :type AND certificateId = :certificateId')
      .setParameters(params)
      .getOne();
    console.log(regist);
    if (regist) {
      throw new BadRequestException('Registration already exists');
    }
    return this.registrationRepository.save(createRegistrationDto);
  }

  async registerStudent(createStudentDto: CreateStudentDto & { courseId: number }) {
    const isExist = await this.studentService.isExist({ email: createStudentDto.email, citizenId: createStudentDto.citizenId });
    const amount = createStudentDto.type === StudentType.ON ? 400000 : createStudentDto.type === StudentType.THI ? 1000000 : 1400000;
    let student;
    if (!isExist) {
      student = await this.studentService.create(createStudentDto);
    } else {
      student = isExist;
    }
    const payment = await this.paymentService.create({
      amount: amount,
      status: 0,
    });
    let registration;
    if (createStudentDto.type === StudentType.ALL) {
      registration = Promise.all([
        this.create({
          studentId: student.id,
          paymentId: payment.id,
          type: StudentType.ON,
          courseId: createStudentDto.courseId,
        }),
        this.create({
          studentId: student.id,
          paymentId: payment.id,
          type: StudentType.THI,
          certificateId: createStudentDto.certificateId,
          status: 0,
        }),
      ]);
    } else {
      registration = await this.create({
        studentId: student.id,
        type: createStudentDto.type,
        certificateId: createStudentDto.certificateId,
        paymentId: payment.id,
        status: createStudentDto.type === StudentType.THI ? 0 : null,
      });
    }
    await this.emailService.sendInviteEmail(student, payment);
    return registration;
  }

  findAll(query?: RegistrationQueryDto) {
    return this.registrationRepository.find({
      where: query,
      relations: ['student', 'payment'],
    });
  }

  findOne(id: number) {
    return this.registrationRepository.findOne({
      where: {
        id: id,
      },
      relations: ['student'],
    });
  }

  async update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    // return this.registrationRepository.update(id, updateRegistrationDto);

    const user = await this.registrationRepository.createQueryBuilder('registration').innerJoinAndSelect('registration.payment', 'payment').where('registration.id = :id', { id: id }).getOne();
    const payment = await this.paymentService.findById(user.id);
    const amount = updateRegistrationDto.type === StudentType.ON ? 400000 : updateRegistrationDto.type === StudentType.THI ? 1000000 : 1400000;
    if (updateRegistrationDto.type && payment.amount !== amount) {

      await this.paymentService.update(user.payment.id, {
        amount: amount,
      });
    }
    const updatedUser = Object.assign(user, updateRegistrationDto);
    const result = await this.registrationRepository.save(updatedUser);
    return result;
  }

  remove(id: number) {
    return this.registrationRepository.delete(id);
  }

  async assignStudentMapping() {
    const registration = await this.findAll({
      type: StudentType.THI,
    });
    registration.forEach(async (item: Registration) => {
      if (item.payment.status === 0) {
        return;
      }
      const exam = (await this.certificateService.findOne(item.certificateId)).exams;
      const newestExam = exam.filter((item) => item.series === Math.max(...exam.map((item) => item.series)));
      const result = await Promise.all(newestExam.map(async (exam) => {
        return await this.studentExamMappingService.create({
          studentId: item.studentId,
          examId: exam.id,
        });
      }));
      if (!result.includes(undefined)) {
        await this.update(item.id, {
          status: 1,
        });
      }
    });
  }

  // async generate() {
  //   const registration = await this.findAll({
  //     type: StudentType.ON,
  //   });
  //   return Promise.all(registration.map(async (item: Registration) => {
  //     await this.studentCourseMappingService.create({
  //       studentId: item.studentId,
  //       courseId: item.courseId,
  //     });
  //   }));
  // }
}
