import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EthnicService } from './ethnic.service';
import { CreateEthnicDto } from './dto/create-ethnic.dto';
import { UpdateEthnicDto } from './dto/update-ethnic.dto';

@Controller('ethnic')
export class EthnicController {
  constructor(private readonly ethnicService: EthnicService) {}

  @Post()
  create(@Body() createEthnicDto: CreateEthnicDto) {
    return this.ethnicService.create(createEthnicDto);
  }

  @Get()
  findAll() {
    return this.ethnicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ethnicService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEthnicDto: UpdateEthnicDto) {
    return this.ethnicService.update(+id, updateEthnicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ethnicService.remove(+id);
  }
}
