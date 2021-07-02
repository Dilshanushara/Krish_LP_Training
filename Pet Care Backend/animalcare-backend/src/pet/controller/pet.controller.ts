import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PetcreateDto } from '../dto/Pet.Create.dto';
import { PetService } from '../service/pet.service';
import { PetUpdateDto } from '../dto/Pet.Update.dto';

@Controller('pet')
export class PetController {

    constructor(private petservice:PetService){
    }

    @Get()
    async GetAllPets(){
        return await this.petservice.getAllPets();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async CreatePet(@Body()petcreatedto:PetcreateDto){
        return await this.petservice.CreatePet(petcreatedto);
    }

    @Get('/:Id')
    async GetPetById(@Param('Id') Id:string){
       return await this.petservice.GetPetByID(Id);
    }

    @Put('/:Id')
    @UsePipes(ValidationPipe)
    async UpdatePet(@Param ('Id')Id:string, @Body() petupadteDto: PetUpdateDto){
        return await this.petservice.UpdatePet(Id,petupadteDto);
    }

    @Delete('/:Id')
    async DeletePet(@Param('Id') Id:string){
        await this.petservice.DeletePet(Id)
    }
}
