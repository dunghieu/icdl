import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Req,
  Body,
  Get,
  Res,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { FirebaseProvider } from 'src/providers/firebase-provider/firebase-provider';

@Controller('file')
export class FileController {
  constructor(
    private readonly fileService: FileService,
    private readonly firebaseProvider: FirebaseProvider,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
  ) {

    const { folderDate, folderRoom, unit, sbd, name } = body;
    file.filename = unit + '_' + sbd + '_' + folderRoom + '_' + name + '.' + 'xlsx';
    await this.firebaseProvider.uploadFile(file, { date: folderDate, room: folderRoom });
    // this.fileService.uploadFile(body, file);
    return { message: 'Upload file successfully' };
  }

  // @Post('avatar')
  // @UseInterceptors(FileInterceptor('avatar'))
  // async uploadAvatar(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Body() body: any,
  // ) {
  //   const { citizenId } = body;
  //   await this.firebaseProvider.uploadAvatar(file, citizenId);
  //   return { message: 'Upload avatar successfully' };
  // }

  @Get('files-by-room')
  async getFilesByRoom(@Query() query: any) {
    const { date, room } = query;
    const files = await this.firebaseProvider.getFilesByRoom(date, room);
    return files;
  }

  @Get('files-by-student')
  async getFilesByStudent(@Query() query: any) {
    const { sbd, room, date } = query;
    const files = await this.firebaseProvider.getFilesByStudent(date, room, sbd);
    return files;
  }

  @Get()
  async getFiles(@Query() query: any) {
    const result = await this.firebaseProvider.getFiles(query);
    return result;
  }
}
