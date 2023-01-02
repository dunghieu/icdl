import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Like, Not, Repository } from 'typeorm';
import { StudentExamMappingQueryDto } from './dto';
import { CreateStudentExamMappingDto } from './dto/create-student-exam-mapping.dto';
import { UpdateStudentExamMappingDto } from './dto/update-student-exam-mapping.dto';
import { StudentExamMapping } from './entities/student-exam-mapping.entity';
import * as csv from 'csvtojson';
import { FileService } from '../file/file.service';
import * as moment from 'moment';

@Injectable()
export class StudentExamMappingService {
  constructor(@InjectRepository(StudentExamMapping)
    private studentExamMappingRepository: Repository<StudentExamMapping>,
    private readonly fileService: FileService,
  ) { }

  async findOneBy(conditions: any) {
    return this.studentExamMappingRepository.findOne({
      where: conditions,
    });

  }

  async create(createStudentExamMappingDto: CreateStudentExamMappingDto) {
    const isExist = await this.findOneBy({
      studentId: createStudentExamMappingDto.studentId,
      examId: createStudentExamMappingDto.examId,
    });
    if (isExist) {
      return;
    }
    return this.studentExamMappingRepository.save(createStudentExamMappingDto);
  }

  findAll(query: StudentExamMappingQueryDto & any) {
    if (query.status && query.status == -1) {
      return this.studentExamMappingRepository.find({
        where: {
          status: IsNull(),
        },
        relations: ['student', 'exam'],
        order: {
          student: {
            lastName: 'ASC',
            firstName: 'ASC',
          }
        }
      });
    }
    if (query.status && query.status == 1) {
      const status = query.status2 == 1 ? 1 : query.status2 == 0 ? 0 : Not(IsNull());
      return this.studentExamMappingRepository.find({
        where: {
          status: status
        },
        relations: ['student', 'exam'],
        order: {
          student: {
            lastName: 'ASC',
            firstName: 'ASC',
          }
        }
      });
    }
    return this.studentExamMappingRepository.find({
      where: query,
      relations: ['exam', 'student', 'exam.certificate'],
      order: {
        student: {
          lastName: 'ASC',
          firstName: 'ASC',
        }
      }
    });
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

  async generateRoom() {
    const mappings = await this.studentExamMappingRepository.find({
      where: {
        status: IsNull(),
      },
      relations: ['student', 'exam'],
      order: {
        examId: 'ASC',
        student: {
          lastName: 'ASC',
          firstName: 'ASC',
        }
      }
    });
    const exams = [...new Set(mappings.map((item) => item.examId))];
    const MAX_STUDENT_PER_ROOM = 20;
    let i = 0;
    Promise.all(mappings.map(async (mapping: StudentExamMapping, index) => {
      if (mapping.examId !== mappings[index - 1]?.examId) i = 0;
      const _prefix = exams.find((item) => item === mapping.examId) && `${mapping.exam.code}`;
      const _room = Math.floor(i / MAX_STUDENT_PER_ROOM) + 1;
      mapping.room = `${_prefix}-${_room}`;
      mapping.sbd = ++i;
      mapping.start = '07:30';
      mapping.end = '10:30';
      await this.studentExamMappingRepository.save(mapping);
    }));
    return mappings;
  }

  async findAllRoom(query) {
    const { s } = query;
    const data = await this.studentExamMappingRepository.find({
      where: {
        room: Like(`%${s || ''}%`),
        status: IsNull(),
      },
      relations: ['student', 'exam'],
      order: {
        examId: 'ASC',
        room: 'ASC',
        sbd: 'ASC',
      }
    });

    const output = [];
    const input = await Promise.all(data.map(async (item) => {
      const date = moment(item.exam.date).format('DDMMYYYY');
      const files = await this.fileService.getFilesByRoom(date, item.room);
      const filesData = files.map((file) => {
        const fileName = file.name.split('_');
        const [Bai, SBD] = fileName;
        return {
          Bai,
          SBD,
          url: file.url,
        };
      });
      const selectedFile = filesData.filter((file) => file.SBD.toString() === item.sbd.toString());
      return {
        room: item.room,
        start: item.start,
        end: item.end,
        student: item.student,
        exam: item.exam,
        status: item.status,
        sbd: item.sbd,
        bai1: selectedFile.find((file) => file.Bai === 'Bai1')?.url || null,
        bai2: selectedFile.find((file) => file.Bai === 'Bai2')?.url || null,
        bai3: selectedFile.find((file) => file.Bai === 'Bai3')?.url || null,
      };
    }) as any);

    input.forEach(function (item) {
      const existing = output.filter(function(v, i) {
        return v.room == item.room;
      });

      item.student.status = item.status;
      item.student.sbd = item.sbd;
      item.student.bai1 = item.bai1;
      item.student.bai2 = item.bai2;
      item.student.bai3 = item.bai3;
      if (existing.length) {
        const existingIndex = output.indexOf(existing[0]);
        output[existingIndex].student = output[existingIndex].student.concat(item.student);
      } else {
        item.student = [item.student];
        output.push(item);
      }
    });
    return output;

  }

  async importTheoreticalScore(file: Express.Multer.File) {
    // Đầu vào là file dữ liệu điểm thi lý thuyết
    if (!file) {
      // Nếu không có file thì báo lỗi
      throw new BadRequestException('File is required');
    }
    if (file.mimetype !== 'text/csv') {
      // Nếu file không phải csv thì báo lỗi
      throw new BadRequestException('File type is not csv');
    }
    // Đọc dữ liệu từ file csv
    const data = await csv().fromString(file.buffer.toString());
    data.forEach(async (item) => {
      // Lấy dữ liệu số báo danh từ file và tìm kiếm thí sinh trong database
      const keys = Object.keys(item);
      const mapping = await this.studentExamMappingRepository.findOne({
        where: {
          sbd: item[keys[0]],
          status: IsNull(),
        },
      });
      // Nếu tìm thấy thì cập nhật điểm thi lý thuyết
      if (mapping) {
        // Nếu điểm thực hành đã được cập nhật trước đó
        // thì cập nhật trạng thái của thí sinh
        if (mapping.practicalScore) {
          mapping.status = this.calculateStatus(mapping.practicalScore, item[keys[1]]);
        }
        // Nếu không thì chỉ cập nhật điểm thi lý thuyết
        mapping.theoreticalScore = item[keys[1]];
        // Lưu lại vào database
        await this.studentExamMappingRepository.save(mapping);
      }
    });
  }

  async updateScore(body) {
    const mapping = await this.studentExamMappingRepository.findOne({
      where: {
        sbd: body.sbd,
        room: body.room,
        status: IsNull(),
      },
    });
    if (mapping) {
      if (body.unit === 'Bai1')
        await this.update(mapping.id, {
          practicalScore1: body.score,
        });
      if (body.unit === 'Bai2')
        await this.update(mapping.id, {
          practicalScore2: body.score,
        });
      if (body.unit === 'Bai3')
        await this.update(mapping.id, {
          practicalScore3: body.score,
        });
    }

    await this.calculatePracticalScore(body);
  }

  async calculatePracticalScore(body) {
    const mapping = await this.studentExamMappingRepository.findOne({
      where: {
        sbd: body.sbd,
        room: body.room,
        status: IsNull(),
      },
    });
    if (mapping) {
      if (mapping.practicalScore1 && mapping.practicalScore2 && mapping.practicalScore3) {
        mapping.practicalScore = Math.round((mapping.practicalScore1 + mapping.practicalScore2 + mapping.practicalScore3) / 3);
        if (mapping.theoreticalScore) {
          mapping.status = this.calculateStatus(mapping.practicalScore, mapping.theoreticalScore);
        }
        await this.studentExamMappingRepository.save(mapping);
      }
    }
  }

  private calculateStatus(practicalScore: number, theoreticalScore: number) {
    if (practicalScore >= 5 && theoreticalScore >= 5) {
      return 1;
    }
    return 0;
  }
}
