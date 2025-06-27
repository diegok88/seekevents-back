import { IsDate, IsInt, IsNumber, IsString } from "class-validator";

export class CreateCadeveDto {
    @IsString()
    cevnom: string;
    @IsString()
    cevdes: string;
    @IsDate()
    cevdat: Date;
    @IsInt()
    cevcae: number;
    @IsInt()
    cevtad: number;
    @IsInt()
    cevfpa: number;
    @IsInt()
    cevcdu: number;
    @IsString()
    cevima: string;
    @IsString()
    cevsta: string;
}
