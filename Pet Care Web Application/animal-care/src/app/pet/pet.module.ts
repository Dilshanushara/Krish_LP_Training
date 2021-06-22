import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    EditComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    FormsModule
  ]
})
export class PetModule { }
