import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { FirebaseProvider } from 'src/providers/firebase-provider/firebase-provider';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [FileController],
  providers: [FileService, FirebaseProvider],
  exports: [FileService],
})
export class FileModule {}
