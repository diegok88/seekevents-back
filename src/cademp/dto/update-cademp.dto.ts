import { PartialType } from '@nestjs/mapped-types';
import { CreateCadempDto } from './create-cademp.dto';

export class UpdateCadempDto extends PartialType(CreateCadempDto) {}
