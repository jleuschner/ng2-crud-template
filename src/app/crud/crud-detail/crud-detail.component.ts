import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import 'rxjs/add/operator/switchMap';

import { Crud } from '../shared/crud.model';

@Component({
  selector: 'app-crud-detail',
  templateUrl: './crud-detail.component.html',
  styleUrls: ['./crud-detail.component.css']
})
export class CrudDetailComponent implements OnInit {

  @Input() crud: Crud;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

/*
    this.route.params
      .switchMap( (params: Params) => console.log(params['id']) ;
*/

  }
}
