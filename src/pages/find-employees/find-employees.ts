import { Employee } from './../../models/employee';
import { DetailEmployeePage } from './../detail-employee/detail-employee';
import { EmployeesServiceProvider } from './../../providers/employees-service/employees-service';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, ModalController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-find-employees',
  templateUrl: 'find-employees.html',
})
export class FindEmployeesPage {
  searchTerm: string = '';
  selectSerch = false;
  employees: Employee[];
  selectedEmployee: Employee;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public EmployeesService: EmployeesServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindEmployeesPage');
  }

  ionViewWillEnter() {
    let storeLoading = this.loading("Cargando Empleados...");
    this.EmployeesService.fecthEmployees()
      .subscribe((list: Employee[]) => {
        if (list) {
          this.employees = list;
          console.log('succes load ');
          storeLoading.dismiss();
          this.showToast('Empleados Cargadas desde API Haibu');
        } else {
          this.employees = [];
          storeLoading.dismiss();
          this.showToast('No se consiguieron Empleados en API Haibu');
        }
      });
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    const modal = this.modalCtrl.create(DetailEmployeePage, { employee: employee });
    modal.present();
  }

  searchEmployees() {
    // Reset employess array back to all of the items
    // if the search term is an empty string return all items
    this.employees = this.EmployeesService.getEmployess();
    if (!this.searchTerm) {
      return this.employees;
    }
    // Filter employess
    this.employees = this.employees.filter((item) => {
      return (item.nombre.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
        || item.apellido.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
    });
  }

  ifSelect() {
    return this.selectSerch;
  }
  onSearch() {
    this.selectSerch = true;
  }
  onCancel(event) {
    console.log(event);
    this.selectSerch = false;
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  loading(textLoading: string) {
    let loading = this.loadingCtrl.create({
      content: textLoading
    });
    loading.present();
    return loading;
  }

  onEditOrder() {
    const alert = this.alertCtrl.create({
      title: 'Editar Empleado',
      subTitle: 'proximamente funcion a crear',
      buttons: ['OK']
    });
    alert.present();
  }

  onDeleteOrder(index: number) {
    this.showToast('Elimina empleado solo de este componente/page');
    this.employees.splice(index, 1);
    console.log('remove a employee to employees' + this.employees);
  }

}
