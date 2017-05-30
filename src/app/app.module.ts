import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule  } from "./app-routing.module";


import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { CrudListComponent } from './crud/crud-list/crud-list.component';
import { CrudDetailComponent } from './crud/crud-detail/crud-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    CrudListComponent,
    CrudDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
