import { IsString } from "class-validator";

export class CreateCadperDto {
    @IsString()
    cdpdes: string;
    @IsString()
    cdpsta: string;
}
