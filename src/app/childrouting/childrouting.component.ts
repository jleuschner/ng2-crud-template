import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params,NavigationEnd, Event } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

import { Subscription } from "rxjs/Subscription";


@Component({
  template:  `
    <h2>Childrouting-Template - Shell</h2>
    <h3>SelID: {{selectedID}}</h3>
    <router-outlet></router-outlet>
  `
})
export class ChildroutingComponent implements OnInit, OnDestroy {
    private selectedID;
    private selID: Observable<number>;

  constructor ( 
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

    private routerSubscription: Subscription;


// https://toddmotto.com/dynamic-page-titles-angular-2-router-events

  ngOnInit() {
    console.log("BASE: ngOnIntit: "+ this.activatedRoute.snapshot.pathFromRoot);
    
    this.routerSubscription = this.router.events
        .filter ( event => event instanceof NavigationEnd)
        .map( () =>   this.activatedRoute ) 
        /*
        .map( route => {
            while ( route.firstChild) route = route.firstChild;
            return route; 
        })
        */
        .subscribe( (route)  => {
            console.log( "BASE: " + route.firstChild.snapshot.params['id'] );
        });
    
    /*
    this.route.params
      .switchMap( (params: Params ) => {
           
           console.log("BASE-SwitchMap: "+params['id']); 
           this.selectedID= params['id']; 
           return params['id']; } )
      .subscribe( (id) => console.log("BASE-Subscribe: "+id) );
    */
  }

  ngOnDestroy(): void {
      this.routerSubscription.unsubscribe();
  }

 }
