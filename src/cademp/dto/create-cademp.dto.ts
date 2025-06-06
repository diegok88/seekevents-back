import { IsNumber, IsString } from "class-validator";

export class CreateCadempDto {
    @IsString()
    cdenom: string;
    @IsString()
    cdecnp: string;
    @IsNumber()
    cdecte: number;
    @IsNumber()
    cdeusu: number;
    @IsNumber()
    cdecen: number;
    @IsString()
    cdesta: string;
}
