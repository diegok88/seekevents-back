import { PartialType } from '@nestjs/mapped-types';
import { CreateTabdivDto } from './create-tabdiv.dto';

export class UpdateTabdivDto extends PartialType(CreateTabdivDto) {}
