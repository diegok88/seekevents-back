import { IsString } from "class-validator"

export class CreateCateveDto {
    @IsString()
    caedes: string
    @IsString()
    caesta: string
}
