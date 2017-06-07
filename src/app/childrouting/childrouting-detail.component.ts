import { Component,OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  template: `
    <h2>Childrouting-Detail</h2>
    <h3>ID: {{id}}</h3>
  `
})
export class ChildroutingDetailComponent implements OnInit { 

  constructor ( 
    private activatedRoute: ActivatedRoute,
    private router: Router) {}
    private id: number;

  ngOnInit() {
    this.activatedRoute.params
      .switchMap( (params: Params) => { console.log("DETAIL-SwitchMap: "+params['id']); return params['id']; } )
      .subscribe( (id) => { 
        console.log("DETAIL-Subscribe: "+id);
        this.id = +id;
      });
  }

}
