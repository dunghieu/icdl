import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, Query, UploadedFile } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { CreateStudentDto } from '../student/dto';
import { RegistrationQueryDto } from './dto/registration-query.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('registration')
@UseInterceptors(ClassSerializerInterceptor)
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  @UseInterceptors(FileInterceptor('avatar'))
  create(
    @UploadedFile() avatar: Express.Multer.File,
    @Body() createRegistrationDto: CreateStudentDto & { courseId: number },
  ) {
    return this.registrationService.registerStudent(createRegistrationDto, avatar);
  }

  @Patch('hoanthi')
  async hoanthi(@Body() body: { studentId: number, certificateId: number, examId: number }) {
    await this.registrationService.hoanThi(body);
    return { message: 'success' };
  }

  @Post('assign')
  async assign() {
    await this.registrationService.assignStudentMapping();
    return { message: 'success' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registrationService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistrationDto: UpdateRegistrationDto) {
    return this.registrationService.update(+id, updateRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registrationService.remove(+id);
  }

  @Get()
  findAll(@Query() query: RegistrationQueryDto) {
    return this.registrationService.findAll(query);
  }

  // @Post('generate')
  // async generate() {
  //   return this.registrationService.generate();
  // }
}
