import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FindEmployeesPage } from '../find-employees/find-employees';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  find() {
    this.navCtrl.push(FindEmployeesPage);
  }

}
