import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChildroutingComponent } from "./childrouting.component";
import { ChildroutingHomeComponent } from "./childrouting-home.component";
import { ChildroutingDetailComponent } from "./childrouting-detail.component";

import { ChildroutingRoutingModule } from "./childrouting-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ChildroutingRoutingModule
    ],
    declarations: [
        ChildroutingComponent,
        ChildroutingHomeComponent,
        ChildroutingDetailComponent
    ]
})
export class ChildroutingModule {}
