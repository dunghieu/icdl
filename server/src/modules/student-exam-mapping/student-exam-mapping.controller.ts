import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentExamMappingService } from './student-exam-mapping.service';
import { CreateStudentExamMappingDto } from './dto/create-student-exam-mapping.dto';
import { UpdateStudentExamMappingDto } from './dto/update-student-exam-mapping.dto';

@Controller('student-exam-mapping')
export class StudentExamMappingController {
  constructor(private readonly studentExamMappingService: StudentExamMappingService) {}

  @Post()
  create(@Body() createStudentExamMappingDto: CreateStudentExamMappingDto) {
    return this.studentExamMappingService.create(createStudentExamMappingDto);
  }

  @Get()
  findAll() {
    return this.studentExamMappingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentExamMappingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentExamMappingDto: UpdateStudentExamMappingDto) {
    return this.studentExamMappingService.update(+id, updateStudentExamMappingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentExamMappingService.remove(+id);
  }
}
