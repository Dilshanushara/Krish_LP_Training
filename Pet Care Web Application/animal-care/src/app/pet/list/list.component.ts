import { Component, OnInit } from '@angular/core';
import { Pet } from '../model/Pet.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'em-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pets: Pet[]=[];
  constructor(private petservce : PetService) { }

  ngOnInit(): void {
    this.pets=this.petservce.GetAllPets();

  }

  Ondelete(id:number){
    this.petservce.DeletePet(id);

  }

}
