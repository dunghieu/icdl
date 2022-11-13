import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('generate')
  getHello(): any {
    return this.appService.generate();
  }

  @Get('faker')
  getFaker(): any {
    return this.appService.getHello();
  }
}
