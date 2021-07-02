import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Owner, OwnerDocuemnt } from "../schema/Owner.schema";
import { OwnerCreateDto } from "../dto/OwnerCreate.dto";
import { OwnerUpdateDto } from "../dto/OwnerUpdate.dto";

@Injectable()
export class OwnerRepository{
  
    constructor(@InjectModel(Owner.name)private ownerModel:Model<OwnerDocuemnt>){

    }

    async Create(ownercreateDto: OwnerCreateDto):Promise<Owner>{
        let newowner=new this.ownerModel(ownercreateDto);
        return await newowner.save();
    }

    async GetAll():Promise<Owner[]>{
        return await this.ownerModel.find();
    }


    async GetByID(id:string):Promise<Owner>{
        return await this.ownerModel.findById(id);
    }

    async Update(Id:string,ownerupdateDto : OwnerUpdateDto):Promise<Owner>{
        return await this.ownerModel.findByIdAndUpdate(Id,ownerupdateDto,{new:true});
        //return owner;  
    }

    async Delete(Id:string):Promise<Owner>{
        return await this.ownerModel.findByIdAndRemove(Id);
    }

}