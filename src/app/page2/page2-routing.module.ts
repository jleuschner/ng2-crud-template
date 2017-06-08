import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from "./page2.component";
import { Page2HomeComponent } from "./page2-home.component";
import { Page2DetailComponent } from "./page2-detail.component";

import { CanDeactivateGuard } from "../can-deactivate-guard.service";


const Page2Routes: Routes = [
    {
        path: 'page2',
        //path: '',   // Lazy loading
        component: Page2Component,
        children: [
            {
                path: '',
                component: Page2HomeComponent
            },
            {
                path: ':id',
                component: Page2DetailComponent,
                canDeactivate: [CanDeactivateGuard]
            }

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(Page2Routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CanDeactivateGuard
    ]
})
export class Page2RoutingModule{}


