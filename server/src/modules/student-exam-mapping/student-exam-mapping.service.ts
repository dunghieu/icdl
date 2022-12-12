import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { StudentExamMappingQueryDto } from './dto';
import { CreateStudentExamMappingDto } from './dto/create-student-exam-mapping.dto';
import { UpdateStudentExamMappingDto } from './dto/update-student-exam-mapping.dto';
import { StudentExamMapping } from './entities/student-exam-mapping.entity';
import * as csv from 'csvtojson';

@Injectable()
export class StudentExamMappingService {
  constructor(@InjectRepository(StudentExamMapping) private studentExamMappingRepository: Repository<StudentExamMapping>) {}

  async create(createStudentExamMappingDto: CreateStudentExamMappingDto) {
    const isExist = await this.studentExamMappingRepository.findOne({
      where: {
        studentId: createStudentExamMappingDto.studentId,
        examId: createStudentExamMappingDto.examId,
      },
    });
    if (isExist) {
      return;
    }
    return this.studentExamMappingRepository.save(createStudentExamMappingDto);
  }

  findAll(query: StudentExamMappingQueryDto) {
    if (query.status && query.status == -1) {
      return this.studentExamMappingRepository.find({
        where: {
          status: IsNull(),
        },
        relations: ['student', 'exam'],
        order: {
          student: {
            firstName: 'ASC',
            lastName: 'ASC',
          }
        }
      });
    }
    return this.studentExamMappingRepository.find({
      where: query,
      relations: ['exam', 'student'],
      order: {
        student: {
          firstName: 'ASC',
          lastName: 'ASC',
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
    const MAX_STUDENT_PER_ROOM = 10;
    let i = 0;
    Promise.all(mappings.map(async (mapping: StudentExamMapping, index) => {
      if (mapping.examId !== mappings[index - 1]?.examId) i = 0;
      const _prefix = exams.find((item) => item === mapping.examId) && `${mapping.exam.code}`;
      console.log(i);
      const _room = Math.floor(i / MAX_STUDENT_PER_ROOM) + 1;
      mapping.room = `${_prefix}-${_room}`;
      mapping.sbd = ++i;
      mapping.start = '07:30';
      mapping.end = '10:30';
      await this.studentExamMappingRepository.save(mapping);
    }));
    return mappings;
  }

  async findAllRoom() {
    const data = await this.studentExamMappingRepository.find({
      where: {
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
    const input = data.map((item) => {
      return {
        room: item.room,
        start: item.start,
        end: item.end,
        student: item.student,
        exam: item.exam,
        status: item.status,
        sbd: item.sbd,
        practicalScore: item.practicalScore,
        theoreticalScore: item.theoreticalScore,
      };
    }) as any;

    input.forEach(function (item) {
      const existing = output.filter(function(v, i) {
        return v.room == item.room;
      });

      item.student.status = item.status;
      item.student.sbd = item.sbd;
      item.student.practicalScore = item.practicalScore;
      item.student.theoreticalScore = item.theoreticalScore;
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
    if (!file) {
      throw new BadRequestException('File is required');
    }
    if (file.mimetype !== 'text/csv') {
      throw new BadRequestException('File type is not csv');
    }
    const data = await csv().fromString(file.buffer.toString());
    data.forEach(async (item) => {
      const keys = Object.keys(item);
      const mapping = await this.studentExamMappingRepository.findOne({
        where: {
          sbd: item[keys[0]],
          status: IsNull(),
        },
      });
      if (mapping) {
        if (mapping.practicalScore) {
          mapping.status = await this.calculateStatus(mapping.practicalScore, item[keys[1]]);
        }
        mapping.theoreticalScore = item[keys[1]];
        await this.studentExamMappingRepository.save(mapping);
      }
    });
  }

  private async calculateStatus(practicalScore: number, theoreticalScore: number) {
    if (practicalScore >= 5 && theoreticalScore >= 5) {
      return 1;
    }
    return 0;
  }
}
