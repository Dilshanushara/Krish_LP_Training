import { Get, Injectable } from '@nestjs/common';
import{v1 as uuid} from 'uuid';
import { PetUpdateDto } from '../dto/Pet.Update.dto';
import { PetRepository } from '../repository/Pet.repository';
import { PetcreateDto } from '../dto/Pet.Create.dto';
import { Pet } from '../schema/Pet.schema';

@Injectable()
export class PetService {

    constructor(private petrepository:PetRepository){}

    async getAllPets():Promise<Pet[]>{
        return await this.petrepository.GetAll();
    }

    async CreatePet(petcreatedto:PetcreateDto){
        return await this.petrepository.Create(petcreatedto);
    }

    async GetPetByID(Id:string){
        return await this.petrepository.GetById(Id);
    }

    async UpdatePet(id:string,petupdateDto : PetUpdateDto):Promise<Pet>{
        return await this.petrepository.Update(id,petupdateDto);
 
    }

    async DeletePet(Id:string){
        return await this.petrepository.Delete(Id);
    }

}


