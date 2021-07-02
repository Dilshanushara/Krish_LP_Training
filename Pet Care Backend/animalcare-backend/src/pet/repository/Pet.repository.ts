import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PetcreateDto } from "../dto/Pet.Create.dto";
import { PetUpdateDto } from "../dto/Pet.Update.dto";
import { Pet, PetDocuemnt } from "../schema/Pet.schema";


@Injectable()
export class PetRepository{

constructor(@InjectModel(Pet.name)private PetModel:Model<PetDocuemnt>){}


    async Create(petcreatedto:PetcreateDto){
        let newpet=new this.PetModel(petcreatedto);
        return await newpet.save();

    }

    async GetAll():Promise<Pet[]>{
        return await this.PetModel.find();
    }

    async GetById(id:string){
        return await this.PetModel.findById(id);

    }

    async Update(id:string,petupdatedto:PetUpdateDto):Promise<Pet>{
        return await this.PetModel.findByIdAndUpdate(id,petupdatedto,{new:true});

    }

    async Delete(id:string):Promise<Pet>{
        return await this.PetModel.findByIdAndRemove(id);
    }

}