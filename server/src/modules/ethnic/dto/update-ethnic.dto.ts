import { PartialType } from '@nestjs/swagger';
import { CreateEthnicDto } from './create-ethnic.dto';

export class UpdateEthnicDto extends PartialType(CreateEthnicDto) {}
