import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnerService } from 'src/owner/owner.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {

  constructor(@InjectRepository(Pet)private petrepository:Repository<Pet>,private ownerservice:OwnerService){

  }
  create(createPetInput: CreatePetInput) {
    let pet= this.petrepository.create();
    return this.petrepository.save(createPetInput);
  }

  findAll() {
    return this.petrepository.find();
  }

  findOne(id: string) {
    return this.petrepository.findOne(id);
  }

  update(id: string, updatePetInput: UpdatePetInput) {
    // let pet:Pet=this.petrepository.create(updatePetInput);
    // pet.Id=id;
    return this.petrepository.update(id,updatePetInput);
  }

  remove(id: string) {
    return this.petrepository.delete(id);
  }

  getOwner(id:string){
    return this.ownerservice.findOne(id);
  }

}
