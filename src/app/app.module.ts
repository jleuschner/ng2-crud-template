import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { ChildroutingModule } from "./childrouting/childrouting.module";  // entfällt bei Lazy Loading
import { Page2Module } from "./page2/page2.module";

import { AppRoutingModule  } from "./app-routing.module";


import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { CrudListComponent } from './crud/crud-list/crud-list.component';
import { CrudDetailComponent } from './crud/crud-detail/crud-detail.component';
import { CrudService } from "./crud/shared/crud.service";

import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent,LoginRoutingModule } from "./login";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // ChildroutingModule,   // entfällt bei Lazy Loading
    Page2Module,
    LoginRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CrudComponent,
    CrudListComponent,
    CrudDetailComponent,
    DashboardComponent,
    LoginComponent
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
