import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { owner } from '../model/owner.model';
import { OwnerServicesService } from '../owner-services.service';

@Component({
  selector: 'em-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private ownerservice : OwnerServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form :NgForm){
    let newowner: owner = {
      id:form.value.id,
      FirstName:form.value.FirstName,
      LastName:form.value.LastName,
      email:form.value.email,
      phone:form.value.phone,

    }
    this.ownerservice.AddOwner(newowner);
    this.router.navigateByUrl('ownerlist')

  }
}
