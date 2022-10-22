import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';
import { AdminUser } from './entities/admin-user.entity';

@Injectable()
export class AdminUserService {
  constructor(
    @InjectRepository(AdminUser)
    private adminUserRepository: Repository<AdminUser>,
  ) {}

  create(createAdminUserDto: CreateAdminUserDto) {
    return this.adminUserRepository.save(createAdminUserDto);
  }

  findAll() {
    return this.adminUserRepository.find();
  }

  findById(id: number) {
    return this.adminUserRepository.findOneBy({id});
  }

  update(id: number, updateAdminUserDto: UpdateAdminUserDto) {
    return this.adminUserRepository.update(id, updateAdminUserDto);
  }

  remove(id: number) {
    return this.adminUserRepository.delete(id);
  }
}
