import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEthnicDto } from './dto/create-ethnic.dto';
import { UpdateEthnicDto } from './dto/update-ethnic.dto';
import { Ethnic } from './entities/ethnic.entity';

@Injectable()
export class EthnicService {
  constructor(
    @InjectRepository(Ethnic)
    private readonly ethnicRepository: Repository<Ethnic>
  ) { }

  create(createEthnicDto: CreateEthnicDto) {
    return this.ethnicRepository.save(createEthnicDto);
  }

  findAll() {
    return this.ethnicRepository.find();
  }

  findById(id: number) {
    return this.ethnicRepository.findOneBy({id});
  }

  update(id: number, updateEthnicDto: UpdateEthnicDto) {
    return this.ethnicRepository.update(id, updateEthnicDto);
  }

  remove(id: number) {
    return this.ethnicRepository.delete(id);
  }
}
