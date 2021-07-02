import { Injectable } from '@nestjs/common';
import{v1 as uuid} from 'uuid';
import { OwnerSearchDto } from '../dto/OwnerSearch.dto';
import { OwnerUpdateDto } from '../dto/OwnerUpdate.dto';
import { OwnerCreateDto } from '../dto/OwnerCreate.dto';
import { OwnerRepository } from '../repository/Owner.repoistory';
import { Owner } from '../schema/Owner.schema';

@Injectable()
export class OwnerService {

    constructor(private ownerrepository:OwnerRepository){
    }

    async createOwner(ownercreateDto:OwnerCreateDto):Promise<Owner>{
        return await this.ownerrepository.Create(ownercreateDto);
    }

    async getAllOwners():Promise<Owner[]>{
        return await this.ownerrepository.GetAll();
    }

    async ownerSearch(ownersearchDto: OwnerSearchDto){
        const{name}=ownersearchDto;
        let owners = await this.getAllOwners();
        if(name){
           owners= owners.filter(owner=>owner.FirstName.includes(name)||owner.LastName.includes(name));
        }
        return owners;
    }

    async getOwnerByID(id:string):Promise<Owner>{
        return await this.ownerrepository.GetByID(id);
    }

    async updateOwner(id:string,ownerupdateDto : OwnerUpdateDto){
        return await this.ownerrepository.Update(id,ownerupdateDto);
       
    }

    async deleteOwner(id:string):Promise<Owner>{
    return await this.ownerrepository.Delete(id);
}
  
}
