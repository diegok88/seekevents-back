import { PartialType } from '@nestjs/mapped-types';
import { CreateCadeveDto } from './create-cadeve.dto';

export class UpdateCadeveDto extends PartialType(CreateCadeveDto) {}
