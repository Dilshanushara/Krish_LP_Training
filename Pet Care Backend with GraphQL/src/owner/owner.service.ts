import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerDto } from './dto/create-owner.input';
import { UpdateOwnerDto } from './dto/update-owner.input';
import { Owner } from './entities/ower.entity';

@Injectable()
export class OwnerService {

    constructor(@InjectRepository(Owner)private ownerRepositoy:Repository<Owner>){

    }

    findAll(){
       return this.ownerRepositoy.find({
           relations:["pets"]
       });
    }

    create(createownerdto:CreateOwnerDto){
        let owner=this.ownerRepositoy.create(createownerdto);
        return this.ownerRepositoy.save(owner);
    }
    findOne(id:string){
        return this.ownerRepositoy.findOne(id,{relations:["pets"]});
    }

    Update(id:string,updateDto:UpdateOwnerDto){
        let owner:Owner=this.ownerRepositoy.create(updateDto);
        owner.id=id;
        return this.ownerRepositoy.save(updateDto);
    }

    Remove(id:string){
        return this.ownerRepositoy.delete(id);
    }

}
