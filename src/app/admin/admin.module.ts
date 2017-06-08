import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from "./admin-dashboard.component";
import { Admin1Component } from "./admin1.component";
import { Admin2Component } from "./admin2.component";
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        Admin1Component,
        Admin2Component,
        AdminDashboardComponent
    ]
})
export class AdminModule { }