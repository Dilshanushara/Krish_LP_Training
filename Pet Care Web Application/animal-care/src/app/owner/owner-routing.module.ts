import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{CreateComponent} from './create/create.component';
import { EditComponent } from './edit/edit.component';
import{ListComponent} from './list/list.component';


const routes: Routes = [
  { path: 'ownercreate', component: CreateComponent },
  { path: 'ownerlist', component: ListComponent },
  { path: 'owneredit/:id', component: EditComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
