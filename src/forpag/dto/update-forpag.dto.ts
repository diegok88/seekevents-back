import { PartialType } from '@nestjs/mapped-types';
import { CreateForpagDto } from './create-forpag.dto';

export class UpdateForpagDto extends PartialType(CreateForpagDto) {}
