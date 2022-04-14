import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {HttpClientModule} from "@angular/common/http";
import { DetailsComponent } from './details/details.component'
import { RouterModule, Routes } from '@angular/router';
const appRoutes:Routes =[
  {path:"table",component:TableComponent},
  {path:'',component:TableComponent},
  {path:'details/:id',component:DetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
