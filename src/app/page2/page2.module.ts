import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";

import { Page2Component } from "./page2.component";
import { Page2HomeComponent } from "./page2-home.component";
import { Page2DetailComponent } from "./page2-detail.component";

import { Page2RoutingModule } from "./page2-routing.module";
import { DialogService } from "../dialog.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        Page2RoutingModule
    ],
    declarations: [
        Page2Component,
        Page2HomeComponent,
        Page2DetailComponent
    ],
    providers: [
        DialogService
    ]
})
export class Page2Module {}
