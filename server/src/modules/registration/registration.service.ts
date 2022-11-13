import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { Registration } from './entities/registration.entity';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Registration)
    private registrationRepository: Repository<Registration>,
  ){}

  create(createRegistrationDto: CreateRegistrationDto) {
    const params = {
      studentId: createRegistrationDto.studentId,
      type: createRegistrationDto.type,
      certificateType: createRegistrationDto.certificateType,
    };
    const regist = this.registrationRepository.createQueryBuilder()
      .where('studentId = :studentId AND type = :type AND certificateType = :certificateType')
      .setParameters(params)
      .getOne();
    if (regist) {
      throw new BadRequestException('Registration already exists');
    }
    return this.registrationRepository.save(createRegistrationDto);

  }

  findAll() {
    return this.registrationRepository.find();
  }

  findOne(id: number) {
    return this.registrationRepository.findOneBy({id});
  }

  update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return this.registrationRepository.update(id, updateRegistrationDto);
  }

  remove(id: number) {
    return this.registrationRepository.delete(id);
  }
}
