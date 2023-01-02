import { Injectable } from '@nestjs/common';

import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
// Import firebase client
import { initializeApp } from 'firebase/app';
import { BadRequestException } from '@nestjs/common';
import { ConfigService } from 'src/modules/config';
import { getStorage, ref, uploadBytes, listAll, getDownloadURL, getMetadata} from 'firebase/storage';
import { getDirectories, getFilesFromDirectory, hashIdEncode, toArrayBuffer } from 'src/utils/Helper';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class FirebaseProvider {
  //
  // Configure Firebase Admin
  //
  constructor(private configService: ConfigService) {
    const adminConfig: ServiceAccount = {
      projectId: configService.get('FIREBASE_PROJECT_ID'),
      privateKey: configService
        .get('FIREBASE_PRIVATE_KEY')
        .replace(/\\n/g, '\n'),
      clientEmail: configService.get('FIREBASE_CLIENT_EMAIL'),
    };
    // Initialize the firebase admin app
    admin.initializeApp({
      credential: admin.credential.cert(adminConfig),
    });

    // Initialise Firebase Client
    initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    });
  }

  async uploadFile(file: Express.Multer.File, folder: { date: string; room: string }) {
    if (!file) {
      throw new BadRequestException('File is required');
    }
    if (file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      throw new BadRequestException('File is not correct');
    }
    const storage = getStorage();
    const storageRef = ref(storage, `exams/${folder.date}/${folder.room}/${file.filename}`);
    const metadata = {
      contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    };
    const fileReadArrayBuffer = toArrayBuffer(file.buffer);
    uploadBytes(storageRef, fileReadArrayBuffer, metadata).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }

  async uploadAvatar(file: Express.Multer.File, citizenId: string) {
    if (!file) {
      throw new BadRequestException('File is required');
    }
    if (file.mimetype !== 'image/jpeg ' && file.mimetype !== 'image/png') {
      throw new BadRequestException('File is not correct');
    }
    const storage = getStorage();
    const storageRef = ref(storage, `avatars/${citizenId}.jpg`);
    const metadata = {
      contentType: 'image/jpeg',
    };
    const fileReadArrayBuffer = toArrayBuffer(file.buffer);
    const snapshot = await uploadBytes(storageRef, fileReadArrayBuffer, metadata);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  }

  async getFiles(query: { date: string; room: string }) {
    const storage = getStorage();
    const output = [];
    const listRef = ref(storage, 'exams/');
    const resultFolder = await listAll(listRef);
    await Promise.all(resultFolder.prefixes.map(async (folderRef) => {
      const folderDate = query?.date ? query.date : folderRef.name;
      const listRef = ref(storage, `exams/${folderDate}`);
      const folderRoom = await listAll(listRef);
      await Promise.all(folderRoom.prefixes.map(async (roomRef) => {
        const listRef = ref(storage, `exams/${folderDate}/${roomRef.name}`);
        const resultFile = await listAll(listRef);
        await Promise.all(resultFile.items.map(async (fileRef) => {
          const metadata = await getMetadata(fileRef);
          const url = await getDownloadURL(fileRef);
          output.push({
            name: metadata.name,
            url: url,
            phach: hashIdEncode(metadata.name, 1),
          });
        }));
      }));
    }));
    return output;
  }

  // async getFile(filename: string, folder: string) {
  //   const storage = getStorage();
  //   // const dirs = getDirectories('./uploads/exams');
  //   const listRef = ref(storage, 'exams/');
  //   const result = await listAll(listRef);
  //   result.prefixes.forEach((folderRef) => {
  //     console.log(folderRef.fullPath);
  //   });
  //   return Promise.all(result.items.map(async (imageRef) => ((await getMetadata(imageRef)).name)));
  // }

  async getFilesByRoom(date: string, room: string) {
    const storage = getStorage();
    const output = [];
    const listRef = ref(storage, `exams/${date}/${room}`);
    const resultImage = await listAll(listRef);
    await Promise.all(resultImage.items.map(async (imageRef) => {
      const metadata = await getMetadata(imageRef);
      const url = await getDownloadURL(imageRef);
      output.push({
        name: metadata.name,
        url: url,
      });
    }));
    return output;
  }

  async getFilesByStudent(date: string, room: string, sbd: string) {
    const result = await this.getFilesByRoom(date, room);
    return result.filter((file) => file.name.split('_')[1] === sbd);
  }
}
