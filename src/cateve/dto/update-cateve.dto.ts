import { PartialType } from '@nestjs/mapped-types';
import { CreateCateveDto } from './create-cateve.dto';

export class UpdateCateveDto extends PartialType(CreateCateveDto) {}
