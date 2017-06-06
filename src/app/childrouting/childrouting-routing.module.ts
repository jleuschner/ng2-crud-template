import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildroutingComponent } from "./childrouting.component";
import { ChildroutingHomeComponent } from "./childrouting-home.component";
import { ChildroutingDetailComponent } from "./childrouting-detail.component";


const childroutingRoutes: Routes = [
    {
        path: 'childrouting',
        component: ChildroutingComponent,
        children: [
            {
                path: '',
                component: ChildroutingHomeComponent
            },
            {
                path: ':id',
                component: ChildroutingDetailComponent
            }

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(childroutingRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ChildroutingRoutingModule{}


