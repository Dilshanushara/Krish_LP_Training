import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../model/Pet.model';
import { PetService } from '../services/pet.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'em-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id:number=0;
  pet: any;
  router: any;

  constructor(private petservice :PetService,private rouer:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id= this.route.snapshot.paramMap.get('id') as unknown as number;

    this.pet=this.petservice.GetPet(this.id);

  }

  onSubmit(form :NgForm){

    let updatepet: Pet = {
      id:this.id,
      PetName:form.value.PetName,
      Age:form.value.Age,
      Gender:form.value.Gender,
    }

    this.petservice.Update(updatepet);
    this.router.navigateByUrl('petlist');

  }

}
