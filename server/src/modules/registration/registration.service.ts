import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentType } from 'src/shared';
import { In, Repository } from 'typeorm';
import { CertificateService } from '../certificate';
import { EmailService } from '../email';
import { FileService } from '../file/file.service';
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
    private fileService: FileService,
  ){}

  async create(createRegistrationDto: CreateRegistrationDto) {
    const params = {
      studentId: createRegistrationDto.studentId,
      type: createRegistrationDto.type,
      certificateId: createRegistrationDto.certificateId,
    };
    const regist = await this.registrationRepository.createQueryBuilder()
      .where('studentId = :studentId AND type = :type AND certificateId = :certificateId AND status IS NULL')
      .setParameters(params)
      .getOne();
    if (regist) {
      throw new BadRequestException('Registration already exists');
    }
    return this.registrationRepository.save(createRegistrationDto);
  }

  async registerStudent(createStudentDto: CreateStudentDto & { courseId: number }, avatar: Express.Multer.File) {
    const avatarUrl = await this.fileService.uploadAvatar(avatar, createStudentDto.citizenId);

    // Kiểm tra hình thức đăng ký thi để gán giá tiền
    const amount = createStudentDto.type === StudentType.ON ? 400000 : createStudentDto.type === StudentType.THI ? 1000000 : 1400000;
    // Kiểm tra xem học viên đã tồn tại hay chưa
    const isExist = await this.studentService.isExist({ email: createStudentDto.email, citizenId: createStudentDto.citizenId });
    let student;
    if (!isExist) {
      // Nếu chưa tồn tại thì tạo mới
      Object.assign(createStudentDto, { avatar: avatarUrl });
      student = await this.studentService.create(createStudentDto);
    } else {
      // Nếu đã tồn tại thì lấy thông tin học viên
      student = await this.studentService.update(isExist.id, createStudentDto);
    }
    // Tạo mới hóa đơn thanh toán
    const payment = await this.paymentService.create({
      amount: amount,
      status: 0,
    });
    // Tạo mới nguyện vọng đăng ký và gán thông tin học viên, hóa đơn thanh toán
    let registration;
    if (createStudentDto.type === StudentType.ALL) {
      // Nếu đăng ký cả ôn thi và thi tạo 2 nguyện vọng
      registration = Promise.all([
        // Tạo nguyện vọng đăng ký ôn thi
        this.create({
          studentId: student.id,
          paymentId: payment.id,
          type: StudentType.ON,
          courseId: createStudentDto.courseId,
        }),
        this.studentCourseMappingService.create({
          studentId: student.id,
          courseId: createStudentDto.courseId,
        }),
        // Tạo nguyện vọng đăng ký thi
        this.create({
          studentId: student.id,
          paymentId: payment.id,
          type: StudentType.THI,
          certificateId: createStudentDto.certificateId,
          status: 0,
        }),
      ]);
    } else {
      // Nếu đăng ký ôn thi hoặc thi, 1 nguyện vọng tương ứng
      registration = await this.create({
        studentId: student.id,
        type: createStudentDto.type,
        certificateId: createStudentDto.certificateId,
        paymentId: payment.id,
        status: createStudentDto.type === StudentType.THI ? 0 : null,
      });
    }
    // Gửi email thông báo
    await this.emailService.sendInviteEmail(student, payment);
    return registration;
  }

  findAll(query?: RegistrationQueryDto) {
    return this.registrationRepository.find({
      where: query,
      relations: ['student', 'payment', 'certificate'],
    });
  }

  findOneBy(query) {
    return this.registrationRepository.findOne({
      where: query,
      relations: ['student'],
    });
  }

  findById(id: number) {
    return this.registrationRepository.findOne({
      where: {
        id: id,
      },
      relations: ['student'],
    });
  }

  async update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    // return this.registrationRepository.update(id, updateRegistrationDto);

    const user = await this.registrationRepository
      .createQueryBuilder('registration')
      .innerJoinAndSelect('registration.payment', 'payment')
      .where('registration.id = :id', { id: id }).getOne();
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
        const studentExamMapping = await this.studentExamMappingService.findAll({
          status: In([0, 1]),
          studentId: item.studentId,
          exam: {
            certificateId: item.certificateId,
          }
        });
        const entry = studentExamMapping.length + 1;
        return await this.studentExamMappingService.create({
          studentId: item.studentId,
          examId: exam.id,
          entry: entry,
        });
      }));
      if (!result.includes(undefined)) {
        await this.update(item.id, {
          status: 1,
        });
      }
    });
  }

  async hoanThi(args: {studentId: number, certificateId: number, examId: number}) {
    const { studentId, certificateId, examId} = args;
    const registration = await this.findOneBy({
      studentId: studentId,
      certificateId: certificateId,
      type: StudentType.THI,
    });
    if (!registration) {
      throw new BadRequestException('Registration not found');
    }
    await this.update(registration.id, {
      status: 0,
    });
    const studentExamMapping = await this.studentExamMappingService.findOneBy({
      studentId: studentId,
      examId: examId,
    });
    await this.studentExamMappingService.update(studentExamMapping.id, {
      status: -1,
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
