import { PartialType } from '@nestjs/mapped-types';
import { CreateCadusuDto } from './create-cadusu.dto';

export class UpdateCadusuDto extends PartialType(CreateCadusuDto) {}
