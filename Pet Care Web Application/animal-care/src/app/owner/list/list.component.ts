import { Component, OnInit } from '@angular/core';
import owners from '../data/owner.json';
import { RouterModule } from '@angular/router';
import { OwnerServicesService } from '../owner-services.service';
import { owner } from '../model/owner.model';



@Component({
  selector: 'em-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

   owners : owner[]=[];
  // owners:any[]=owners; 


  constructor(private ownerservice : OwnerServicesService) { }

  ngOnInit(): void {
    this.owners=this.ownerservice.GetAllOwners();
    }

    Ondelete(id : number){
      this.ownerservice.Delete(id);

    }
    
  }


