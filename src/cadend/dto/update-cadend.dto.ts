import { PartialType } from '@nestjs/mapped-types';
import { CreateCadendDto } from './create-cadend.dto';

export class UpdateCadendDto extends PartialType(CreateCadendDto) {}
