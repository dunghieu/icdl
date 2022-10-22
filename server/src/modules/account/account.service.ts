import { Injectable, BadRequestException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { Hash } from 'src/utils/Hash';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}
  async create(createAccountDto: CreateAccountDto) {
    const account = await this.findByEmail(createAccountDto.email);
    if (account) {
      throw new BadRequestException('Email already exists');
    }
    return this.accountRepository.save(createAccountDto);
  }

  findAll() {
    return this.accountRepository.find();
  }

  findById(id: number) {
    return this.accountRepository.findOneBy({ id });
  }

  findByEmail(email: string): Promise<Account> {
    return this.accountRepository.findOneBy({ email });
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    if (updateAccountDto.password) {
      updateAccountDto.password = Hash.make(updateAccountDto.password);
    }
    await this.accountRepository.update(id, updateAccountDto);
    return {status: HttpStatus.OK, message: 'Update successfully'};
  }

  async remove(id: number) {
    const account = await this.findById(id);
    if (!account) {
      throw new NotFoundException('Account not found');
    }
    await this.accountRepository.delete(id);
    return {status: HttpStatus.OK, message: 'Delete successfully'};
  }
}
