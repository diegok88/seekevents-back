import { PartialType } from '@nestjs/mapped-types';
import { CreateCadperDto } from './create-cadper.dto';

export class UpdateCadperDto extends PartialType(CreateCadperDto) {}
