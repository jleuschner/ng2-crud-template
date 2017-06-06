import { Component,OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  template: `
    <p>Childrouting-Detail</p>
  `
})
export class ChildroutingDetailComponent implements OnInit { 

  constructor ( 
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    console.log("ngOnIntit: "+ this.route.snapshot.params['id']);
    this.route.params
      .switchMap( (params: Params) => { console.log("SwitchMap: "+params['id']); return params['id']; } )
      .subscribe( (id) => console.log("Subscribe: "+id) );
    
  }

}
