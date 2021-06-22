import { Component, OnInit } from '@angular/core';
import { OwnerModule } from '../owner.module';
import { owner } from '../model/owner.model'
import { OwnerServicesService } from '../owner-services.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import {ActivatedRoute,Route}from '@angular/router'

@Component({
  selector: 'em-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id:number = 0;
  

  // owner : owner={
  //   id:0,
  //   FirstName:"",
  //   LastName:"",
  //   email:"",
  //   phone:0

  // }; 
  owner: any;
  constructor(private ownerservice: OwnerServicesService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id= this.route.snapshot.paramMap.get('id') as unknown as number;
    this.owner=this.ownerservice.GetOwner(this.id);
    console.log(this.owner);
    console.log("hello");

  }

  onSubmit(form :NgForm){
    let updateowner: owner = {
      id:this.id,
      FirstName:form.value.FirstName,
      LastName:form.value.LastName,
      email:form.value.email,
      phone:form.value.phone,
    }

    this.ownerservice.Update(updateowner);
    this.router.navigateByUrl('ownerlist')
  }

}
