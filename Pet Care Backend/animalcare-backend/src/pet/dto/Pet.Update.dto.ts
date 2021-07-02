import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PetUpdateDto{
    //Id:string
    @IsNotEmpty()
    @IsString()
    Name:string;
    @IsNotEmpty()
    @IsNumber()
    Age:number;
    @IsNotEmpty()
    Gender:string;
}