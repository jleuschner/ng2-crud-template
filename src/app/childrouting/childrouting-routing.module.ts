import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildroutingComponent } from "./childrouting.component";
import { ChildroutingHomeComponent } from "./childrouting-home.component";


const childroutingRoutes: Routes = [
    {
        path: 'childrouting',
        component: ChildroutingComponent,
        children: [
            {
                path: '',
                component: ChildroutingHomeComponent
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


