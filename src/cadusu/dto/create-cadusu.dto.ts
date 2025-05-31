import { IsNumber, IsString } from "class-validator";

export class CreateCadusuDto {
    @IsString()
    cdunom: string;
    @IsString()
    cducpf: string;
    @IsString()
    cduema: string;
    @IsString()
    cdusen: string;
    @IsNumber()
    cduper: number;
    @IsNumber()
    cduemp: number;
    @IsString()
    cdufac: string;
    @IsString()
    cduins: string;
    @IsString()
    cdutel: string;
    @IsString()
    cdusta: string;
}
