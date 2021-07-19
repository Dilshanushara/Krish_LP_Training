import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOwnerDto } from './dto/create-owner.input';
import { UpdateOwnerDto } from './dto/update-owner.input';
import { Owner } from './entities/ower.entity';
import { OwnerService } from './owner.service';

@Resolver()
export class OwnerResolver {

    constructor(private ownersevice:OwnerService){

    }

    @Query(()=>[Owner],{name:"getAllOwners"})
    findAll(){
       return this.ownersevice.findAll();
    }

    @Mutation(()=>Owner,{name:"CreateOwner"})
    create(@Args('owner')createownerdto:CreateOwnerDto){
        return this.ownersevice.create(createownerdto);
    }

    @Query(()=>Owner,{name:"FindOwner"})
    findOne(@Args('id')id:string){
        return this.ownersevice.findOne(id);
    }
    @Mutation(()=>Owner,{name:"UpdateOwner"})
    update(id:string,updateDto:UpdateOwnerDto){
        return this.ownersevice.Update(id,updateDto);
    }

    @Mutation(()=>Owner,{name:"DeleteOwner"})
    Remove(@Args('id')id:string){
        return this.ownersevice.Remove(id);
    }
    
}
