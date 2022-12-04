import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Certificate } from './certificate.entity';

@Injectable()
export class CertificateService {
  constructor(
        @InjectRepository(Certificate)
        private certificateRepo: Repository<Certificate>,
  ) { }

  async findAll() {
    return this.certificateRepo.find({
      relations: ['exams'],
    });
  }

  async findOne(id: number) {
    return this.certificateRepo.findOne({where: {id}, relations: ['exams']});
  }
}
