import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Crud } from './crud.model';

@Injectable()
export class CrudService {

  private crudUrl = 'http://balin2.kl.kdo.int:3000/api/tests';

  constructor(private http: Http) { }

  getCruds(): Promise<Crud[]> {
    return this.http.get(this.crudUrl)
      .toPromise()
      .then(response => { console.log(response.json()); return response.json() as Crud[]; })
      .catch(this.handleError);
  }

  getCrud(id: number): Promise<Crud> {
    return this.http.get(this.crudUrl+'/'+id)
      .toPromise()
      .then( response => response.json() as Crud)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  /*
    getCruds(): Promise<Crud[]> {
      return Promise.resolve([
        { id: 1, name: "Crud1" },
        { id: 2, name: "Crud2" }
        ]);
    }
  */
}
