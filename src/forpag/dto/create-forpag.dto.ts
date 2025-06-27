import { IsString } from "class-validator";

export class CreateForpagDto {
    @IsString()
    fpades: string;
    @IsString()
    fpasta: string;
}
