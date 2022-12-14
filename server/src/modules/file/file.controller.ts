import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Req,
  Body,
} from '@nestjs/common';
import { FileService } from './file.service';
import {
  FileInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/',
        filename: (req, file, cb) => {
          const { folder, unit, sbd, name } = req.body;
          if (!fs.existsSync(`./uploads/${folder}`)) {
            fs.mkdirSync(`./uploads/${folder}`);
          }
          const filename: string =
            unit + '_' + sbd + '_' + name + '.' +
            file.originalname.split('.')[
              file.originalname.split('.').length - 1
            ];
          const newFilename = `${req.body.folder}/${filename}`;
          return cb(null, newFilename);
        },
      }),
      //   fileFilter: imageFileFilter,
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
    return this.fileService.uploadFile(body, file);
  }
}
