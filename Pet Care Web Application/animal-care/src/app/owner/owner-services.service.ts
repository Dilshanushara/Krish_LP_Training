import { Injectable } from '@angular/core';
import owners from './data/owner.json';
import{owner}from './model/owner.model';


@Injectable({
  providedIn: 'root'
})
export class OwnerServicesService {
  // owners:any[]=owners;
  allowners :owner[]=owners;

  constructor() {
   
   }
   GetAllOwners(){
    return this.allowners;
  }

  AddOwner(newowner: owner){
    this.allowners.push(newowner);
  }

  Delete(id : Number){
    let index = this.allowners.findIndex(x=>x.id ==id);
    this.allowners.splice(index,1);
  }

  GetOwner(id : number){
    return this.allowners.find(x=>x.id==id);

  }

  Update(owner : owner){
    let ownerindex= this.allowners.findIndex(x=> x.id==owner.id);
    this.allowners[ownerindex]=owner;
  }




}
