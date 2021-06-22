import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{OwnerModule} from './owner/owner.module';
import { PetModule } from './pet/pet.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './owner/list/list.component';
// import { createComponent } from '@angular/compiler/src/core';
// import { EditComponent } from './owner/edit/edit.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwnerModule,
    PetModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
   
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
