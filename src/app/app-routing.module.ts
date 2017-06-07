import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CrudComponent } from './crud/crud.component';
import { CrudDetailComponent } from "./crud/crud-detail/crud-detail.component";


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: CrudDetailComponent },
    { path: 'cruds', component: CrudComponent },

    // Lazy Loading - Block
    { 
        path: 'childrouting',
        loadChildren: 'app/childrouting/childrouting.module#ChildroutingModule',
        data: { preload: true} 
    },
    // Lazy Loading - Block
    
    { path: '**', redirectTo: '/dashboard' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }