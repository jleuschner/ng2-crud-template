import { Component,OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { DialogService } from "../dialog.service";

@Component({
  template: `
    <h2>Page2-Detail</h2>
    <h3>ID: {{id}}</h3>
    <input type="checkbox" [(ngModel)]='dirty'>Dirty {{dirty}}
  `
})
export class Page2DetailComponent implements OnInit { 

  private dirty: boolean = false;

  constructor ( 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
    ) {}
    
    private id: number;

  ngOnInit() {
    this.activatedRoute.params
      .switchMap( (params: Params) => { console.log("DETAIL-SwitchMap: "+params['id']); return params['id']; } )
      .subscribe( (id) => { 
        console.log("DETAIL-Subscribe: "+id);
        this.id = +id;
      });
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.dirty) return true;

    //return this.dialogService.confirm("Verlassen ?");
    return this.dialogService.confirm("verlassen?").then( (answer) => {this.dirty=!answer; return answer; } );
  }

}
