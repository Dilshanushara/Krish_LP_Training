import {IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class OwnerCreateDto{
    Id:string
    @IsNotEmpty()
    @IsString()
    FirstName:string
    @IsNotEmpty()
    @IsString()
    LastName:string
    @IsNotEmpty()
    Address:string
    @IsNotEmpty()
    @IsEmail()
    Email:string
    @IsNotEmpty()
    @IsNumber()
    Mobile:string
}