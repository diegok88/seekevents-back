import { IsString } from "class-validator";

export class CreateCatempDto {
    @IsString()
    ctedes: string
    @IsString()
    ctesta: string
}
