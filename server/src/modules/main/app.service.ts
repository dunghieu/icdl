import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Connection, getManager } from 'typeorm';
import { Student } from '../student';

@Injectable()
export class AppService {
  constructor(
    private readonly connection: Connection,
  ) {}

  getHello(): any {
    // console.log(typeof faker.date.past(30, '2010-01-01'));
    return faker.date.past(30, '2010-01-01').getDate();
  }

  async generate() {
    const student = await this.connection.getRepository(Student).find();

    // const values = {
    //   firstName: faker.name.firstName(),
    //   lastName: faker.name.lastName(),
    //   email: faker.internet.email(),
    //   phoneNumber: faker.phone.number('0#########'),
    //   dayOfBirth: ('0' + faker.date.past(30, '2010-01-01').getDate()).slice(-2),
    //   monthOfBirth: ('0' + (faker.date.past(30, '2010-01-01').getMonth() + 1)).slice(-2),
    //   yearOfBirth: faker.date.past(30, '2010-01-01').getFullYear().toString(),
    // };
    // // await this.connection.createQueryBuilder().insert().into(Student).values(values).execute();

    // Promise.all(student.map(async (item) => {
    // const random = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    // const gender = random >= 1.5 ? 'nam' : 'nữ';
    // const type = random === 1 ? 'CNTT Cơ bản' : random === 2 ? 'CNTT Nâng cao' : 'IC3, MOS';
    // const type = random === 1 ? 'ôn' : random === 2 ? 'thi' : 'ôn + thi';
    // await this.connection.createQueryBuilder().update(Student).set({code: '0000'}).where('id = :id', { id: item.id }).execute();

    // }));

    return student;
  }
}
