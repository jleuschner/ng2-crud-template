import { Component, OnInit } from '@angular/core';

import { Crud } from '../shared/crud.model';
import { CrudService } from '../shared/crud.service'

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css'],
  providers: [CrudService]
})
export class CrudListComponent implements OnInit {

  private cruds: Crud[];
  private selectedCrud: Crud;
  private selectedID: number;

  constructor(private crudService: CrudService) {  }

  ngOnInit(): void {
    this.getCruds();
    console.log('ngOnInit: ' + this.cruds)
    //this.cbtest().then( w => console.log(w))
    //this.crudService.getCrud(3).then(crud => console.log(crud)).catch( err => console.log("ERR",err));
  }

  getCruds(): void {
    this.crudService.getCruds().then(cruds => { this.cruds = cruds; console.log('getCruds: ' + cruds ); } );
  }

  select(crud: Crud): void {
    this.selectedID = crud.id;
  }


  cbtest(): Promise<string> {
    return Promise.resolve("Callback!!!");
  }

}
