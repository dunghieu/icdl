import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, ClassSerializerInterceptor} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { SearchRequest } from 'src/shared/search-request';

@Controller('student')
@UseInterceptors(ClassSerializerInterceptor)
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get('searchThi')
  searchThi(@Query() query){
    return this.studentService.searchThi(query);
  }

  @Get('search')
  search(@Query() query){
    return this.studentService.search(query);
  }

  @Get('searchOn')
  searchOn(@Query() query){
    return this.studentService.searchOn(query);
  }

  @Get('searchKQ')
  searchKQ(@Query() query){
    return this.studentService.searchKQ(query);
  }

  @Get('danh-sach-thi')
  getDanhSachThi(){
    return this.studentService.getDanhSachThi();
  }

  @Get()
  findAll(@Query() query: SearchRequest) {
    return this.studentService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
