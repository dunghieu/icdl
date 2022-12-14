import { Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
  uploadFile(req:Express.Request, file: Express.Multer.File) {
    // console.log(file);
    return file;
  }
}
