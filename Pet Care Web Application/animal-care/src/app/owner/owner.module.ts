import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
