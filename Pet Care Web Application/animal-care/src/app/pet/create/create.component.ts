import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pet } from '../model/Pet.model';
import { PetService } from '../services/pet.service';
//import {Pet} from '../model.Pet.model';


@Component({
  selector: 'em-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private petservice : PetService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form :NgForm){
    let newpet: Pet = {
      id:form.value.id,
      PetName:form.value.PetName,
      Age:form.value.Age,
      Gender:form.value.Gender,

    }
    this.petservice.AddPet(newpet);
    this.router.navigateByUrl('petlist')

  }

}
