import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd, Event } from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
// import { Observable } from "rxjs/Observable";

import { Subscription } from "rxjs/Subscription";


@Component({
    template: `
    <h1>Childrouting-Template - Shell</h1>
    <p>:id des Child-Components am Ende des URL wird als Subscription mitgehört und 'selectedID' zugewiesen:
    <br><a routerLink="1" routerLinkActive="aktiv">Childrouting/1</a>
    <br><a routerLink="./2" routerLinkActive="aktiv">Childrouting/2</a>

    <h3>SelectedID: {{selectedID}}</h3>
    
    <div class="outlet">
    <router-outlet></router-outlet>
    </div>
    
  `,
  styles: [`
    .outlet {
        border: 1px dashed #333;
    }
  `]
})
export class ChildroutingComponent implements OnInit, OnDestroy {
    private selectedID;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router) { }

    private routerSubscription: Subscription;


    // https://toddmotto.com/dynamic-page-titles-angular-2-router-events
    ngOnInit() {
        this.routerSubscription = this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .subscribe((route) => {
                this.selectedID = route.firstChild.snapshot.params['id'];
                console.log("BASE: " + route.firstChild.snapshot.params['id']);
            });
    }

    ngOnDestroy(): void {
        this.routerSubscription.unsubscribe();
    }

}
