import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import 'rxjs/add/operator/switchMap';

import { Crud } from '../shared/crud.model';
import { CrudService } from "../shared/crud.service";

@Component({
  selector: 'app-crud-detail',
  templateUrl: './crud-detail.component.html',
  styleUrls: ['./crud-detail.component.css']
})
export class CrudDetailComponent implements OnInit {

  @Input() crud: Crud;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private crudService: CrudService
  ) { }

  ngOnInit() {
    console.log("PARAM:" + this.route.snapshot.params['id'])
    this.route.params
      .switchMap( (params: Params) => this.crudService.getCrud(+params['id']) )
      .subscribe( crud => { this.crud = crud; console.log('SUBSC: ' + crud); } );
  }

  update(): void {
    this.crudService.update(this.crud)
      .then( () => console.log("Updated") );
  }
}
