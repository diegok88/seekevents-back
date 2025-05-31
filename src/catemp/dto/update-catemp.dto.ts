import { PartialType } from '@nestjs/mapped-types';
import { CreateCatempDto } from './create-catemp.dto';

export class UpdateCatempDto extends PartialType(CreateCatempDto) {}
