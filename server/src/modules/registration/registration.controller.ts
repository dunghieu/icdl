import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, Query } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { CreateStudentDto } from '../student/dto';
import { RegistrationQueryDto } from './dto/registration-query.dto';

@Controller('registration')
@UseInterceptors(ClassSerializerInterceptor)
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  create(@Body() createRegistrationDto: CreateStudentDto & { courseId: number }) {
    return this.registrationService.registerStudent(createRegistrationDto);
  }

  @Get()
  findAll(@Query() query: RegistrationQueryDto) {
    return this.registrationService.findAll(query);
  }

  @Post('assign')
  async assign() {
    await this.registrationService.assignStudentMapping();
    return { message: 'success' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registrationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistrationDto: UpdateRegistrationDto) {
    return this.registrationService.update(+id, updateRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registrationService.remove(+id);
  }

  // @Post('generate')
  // async generate() {
  //   return this.registrationService.generate();
  // }
}
