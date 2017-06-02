import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChildroutingComponent } from "./childrouting.component";
import { ChildroutingHomeComponent } from "./childrouting-home.component";

import { ChildroutingRoutingModule } from "./childrouting-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ChildroutingRoutingModule
    ],
    declarations: [
        ChildroutingComponent,
        ChildroutingHomeComponent
    ]
})
export class ChildroutingModule {}
