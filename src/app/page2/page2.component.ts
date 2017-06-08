import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd, Event } from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Subscription } from "rxjs/Subscription";


@Component({
    template: `
    <h1>Page2 - Routing mit CanDeactivate-Guard</h1>
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
export class Page2Component implements OnInit, OnDestroy {
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
