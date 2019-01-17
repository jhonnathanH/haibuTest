import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import { Employee } from '../../models/employee';
import { Storage } from '@ionic/storage';

@Injectable()
export class EmployeesServiceProvider {
  employees: Employee[] = [];

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello EmployeesServiceProvider Provider');
  }
  getEmployess() {
    return this.employees.slice();
  }

  fecthEmployees() {

    return this.http.get("https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user")
      .map((response: Response) => {
        console.log(response + "darkwinnsss");
        return response.json();
      })
      .do((data: Employee[]) => {

        if (data) {
          this.employees = data;
          console.log( "succes http load>"+JSON.stringify(this.employees));
         // this.storage.set('employees', this.employees); 
        } else {
           this.employees = [];
        }
      });
  }

}
