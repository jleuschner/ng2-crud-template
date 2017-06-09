import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from "./admin.component";
import { AdminDashboardComponent } from "./admin-dashboard.component";
import { Admin1Component } from "./admin1.component";
import { Admin2Component } from "./admin2.component";

import { AuthGuard } from "../auth-guard.service";

const adminRoutes: Routes = [
  {
    path: '', 
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'admin1', component: Admin1Component },
          { path: 'admin2', component: Admin2Component },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
    
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class AdminRoutingModule {}