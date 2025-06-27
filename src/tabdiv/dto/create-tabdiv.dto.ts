import { Decimal } from "@prisma/client/runtime/library";
import { IsDecimal, IsNumber, IsString } from "class-validator";

export class CreateTabdivDto {
    @IsString()
    taddes: string;
    @IsNumber()
    tabdur: number;
    @IsDecimal()
    tadval: Decimal;
    @IsString()
    tabsta: string;
}
