import { Injectable } from '@nestjs/common';
import { FirebaseProvider } from 'src/providers/firebase-provider/firebase-provider';

@Injectable()
export class FileService {
  constructor(private readonly firebaseProvider: FirebaseProvider) { }

  uploadFile(req:Express.Request, file: Express.Multer.File) {
    // console.log(file);
    return file;
  }

  async getFilesByRoom(date: string, room: string) {
    const files = await this.firebaseProvider.getFilesByRoom(date, room);
    return files;
  }

  uploadAvatar(file: Express.Multer.File, citizenId: string) {
    return this.firebaseProvider.uploadAvatar(file, citizenId);
  }
}
