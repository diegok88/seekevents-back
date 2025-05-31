import { IsNumber, IsString } from "class-validator";

export class CreateCadendDto {
    @IsString()
    cenrua: string;
    @IsNumber()
    cennum: number;
    @IsString()
    cenbai: string;
    @IsString()
    cencid: string;
    @IsString()
    censta: string;
}
