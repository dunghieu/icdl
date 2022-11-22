import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentCourseMappingService } from './student-course-mapping.service';
import { CreateStudentCourseMappingDto } from './dto/create-student-course-mapping.dto';
import { UpdateStudentCourseMappingDto } from './dto/update-student-course-mapping.dto';

@Controller('student-course-mapping')
export class StudentCourseMappingController {
  constructor(private readonly studentCourseMappingService: StudentCourseMappingService) {}

  @Post()
  create(@Body() createStudentCourseMappingDto: CreateStudentCourseMappingDto) {
    return this.studentCourseMappingService.create(createStudentCourseMappingDto);
  }

  @Get()
  findAll() {
    return this.studentCourseMappingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentCourseMappingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentCourseMappingDto: UpdateStudentCourseMappingDto) {
    return this.studentCourseMappingService.update(+id, updateStudentCourseMappingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentCourseMappingService.remove(+id);
  }
}
