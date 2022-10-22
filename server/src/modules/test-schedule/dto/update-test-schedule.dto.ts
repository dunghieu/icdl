import { PartialType } from '@nestjs/swagger';
import { CreateTestScheduleDto } from './create-test-schedule.dto';

export class UpdateTestScheduleDto extends PartialType(CreateTestScheduleDto) {}
