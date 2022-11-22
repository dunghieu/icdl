import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from '../student/student.module';
import { ConfigModule, ConfigService } from '../config';
import { AccountModule } from '../account/account.module';
import { AuthModule } from '../auth';
import { CourseModule } from '../course';
import { EthnicModule } from '../ethnic';
import { CityModule } from '../city';
import { FeedModule } from '../feed';
import { ExamModule } from '../exam';
import { EmailModule } from '../email';
import { PaymentModule } from '../payment/payment.module';
import { RegistrationModule } from '../registration';
import { CertificateModule } from '../certificate';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          entities: [__dirname + './../**/**.entity{.ts,.js}'],
          synchronize: configService.get('DB_SYNC') === 'true',
        } as TypeOrmModuleAsyncOptions;
      },
    }),
    RegistrationModule,
    EmailModule,
    AccountModule,
    StudentModule,
    ExamModule,
    FeedModule,
    EthnicModule,
    CityModule,
    CourseModule,
    ConfigModule,
    AuthModule,
    PaymentModule,
    CertificateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
