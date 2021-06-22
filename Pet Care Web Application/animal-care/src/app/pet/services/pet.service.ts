import { Injectable } from '@angular/core';
import { Pet } from '../model/Pet.model';
import pets from '../data/Pets.json'

@Injectable({
  providedIn: 'root'
})
export class PetService {

  allpets:Pet[]=pets;

  constructor() { }


  GetAllPets(){
    return this.allpets;
  }

  AddPet(pet: Pet){
    this.allpets.push(pet);

  }

  DeletePet(id:number){
    let index = this.allpets.findIndex(x=>x.id ==id);
    this.allpets.splice(index,1);

  }

  GetPet(id: number){
    return this.allpets.find(x=>x.id==id);
  }
  Update(pet:Pet){
    let petidex =this.allpets.findIndex(x=>x.id==pet.id);
    this.allpets[petidex]=pet;

  }


}
