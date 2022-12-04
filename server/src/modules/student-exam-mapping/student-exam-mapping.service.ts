import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { StudentExamMappingQueryDto } from './dto';
import { CreateStudentExamMappingDto } from './dto/create-student-exam-mapping.dto';
import { UpdateStudentExamMappingDto } from './dto/update-student-exam-mapping.dto';
import { StudentExamMapping } from './entities/student-exam-mapping.entity';

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

  async generateRoom(examId?: number) {
    const mappings = await this.studentExamMappingRepository.find({
      where: {
        examId,
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
    const MAX_STUDENT_PER_ROOM = 20;
    const practiceRoom = mappings.filter((m) => m.exam.type == 'Thực hành');
    const theoryRoom = mappings.filter((m) => m.exam.type == 'Lý thuyết');
    Promise.all(practiceRoom.map(async (mapping:StudentExamMapping, index) => {
      const _prefix = 'TH';
      const _room = Math.floor(index / MAX_STUDENT_PER_ROOM) + 1;
      mapping.room = `${_prefix}-${_room}`;
      mapping.sbd = (index + 1).toString().padStart(4, '0');
      mapping.start = '07:30';
      mapping.end = '09:30';
      await this.studentExamMappingRepository.save(mapping);
    }));
    Promise.all(theoryRoom.map(async (mapping:StudentExamMapping, index) => {
      const _prefix = 'LT';
      const _room = Math.floor(index / MAX_STUDENT_PER_ROOM) + 1;
      mapping.room = `${_prefix}-${_room}`;
      mapping.sbd = (index + 1).toString().padStart(4, '0');
      mapping.start = '13:30';
      mapping.end = '15:30';
      await this.studentExamMappingRepository.save(mapping);
    }));
    return mappings;
  }

  findAllRoom() {
    const query = this.studentExamMappingRepository.createQueryBuilder('mapping');
    return this.studentExamMappingRepository.find({
      where: {
        status: IsNull(),
      },
      relations: ['student', 'exam'],
      order: {
        room: 'ASC',
        start: 'ASC',
      }
    });
  }
}
