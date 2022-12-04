import { Controller, Get } from '@nestjs/common';
import { CertificateService } from './certificate.service';

@Controller('certificate')
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) { }

  @Get()
  findAll() {
    return this.certificateService.findAll();
  }
}
