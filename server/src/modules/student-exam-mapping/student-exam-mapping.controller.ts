import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, ClassSerializerInterceptor, UploadedFile } from '@nestjs/common';
import { StudentExamMappingService } from './student-exam-mapping.service';
import { CreateStudentExamMappingDto } from './dto/create-student-exam-mapping.dto';
import { UpdateStudentExamMappingDto } from './dto/update-student-exam-mapping.dto';
import { StudentExamMappingQueryDto } from './dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('student-exam-mapping')
@UseInterceptors(ClassSerializerInterceptor)
export class StudentExamMappingController {
  constructor(private readonly studentExamMappingService: StudentExamMappingService) {}

  @Post()
  create(@Body() createStudentExamMappingDto: CreateStudentExamMappingDto) {
    return this.studentExamMappingService.create(createStudentExamMappingDto);
  }

  @Get()
  findAll(@Query() query: StudentExamMappingQueryDto) {
    return this.studentExamMappingService.findAll(query);
  }

  @Get('room')
  getRoom(@Query() query) {
    return this.studentExamMappingService.findAllRoom(query);
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

  @Post('generate-room')
  generateRoom() {
    return this.studentExamMappingService.generateRoom();
  }

  @Post('import')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.studentExamMappingService.importTheoreticalScore(file);
  }

  @Post('update-score')
  async updateScore(@Body() body: any) {
    await this.studentExamMappingService.updateScore(body);
    return;
  }

}
