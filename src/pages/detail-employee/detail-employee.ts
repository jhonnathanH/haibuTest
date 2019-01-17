import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Employee } from '../../models/employee';

/**
 * Generated class for the DetailEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-employee',
  templateUrl: 'detail-employee.html',
})
export class DetailEmployeePage {
  userValid: Boolean;
  employee: Employee;
  bandFecha: Boolean;
  bandRut = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.employee = this.navParams.get("employee");
    console.log(this.employee.nombre);

    if (this.employee.activo == 1) {
      this.userValid = true;
    } else {
      this.userValid = false;
    }
    this.getBandFecha();
    this.getValidRUT(this.employee.rut);
  }

  ionViewDidLoad() {

  }

  private getBandFecha() {
    if (this.employee.fechaNacimiento.indexOf('/') > -1) {
      var res = this.employee.fechaNacimiento.split("/");
      if (res.length > 1) {
        let month = Number(res[0]);
        let day = Number(res[1]);
        let year = Number(res[2]);
        if ((month >= 1 && month <= 12) && (day >= 1 && day <= 31) && (year >= 1900 && year < 2999)) {
          this.bandFecha = true;
        }
        else {
          this.bandFecha = false;
        }
        console.log('band fecha ' + this.bandFecha);
      }
    }
  }

  getValidRUT(rutValue: string) {
    for (let i = 0; i < rutValue.length; i++) {
      if (rutValue[i] != '-') {
        if (!isNaN(Number(rutValue[i]))) {
          console.log('band Rut character is numeric ');
        } else {
          this.bandRut = false;
        }
      }
    }
    console.log('band Rut ' + this.bandRut);
  }

}
