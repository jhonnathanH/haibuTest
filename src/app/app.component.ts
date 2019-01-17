import { FindEmployeesPage } from './../pages/find-employees/find-employees';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, icon: string, component: any }>;
  activePage: any;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public alertCtrl: AlertController) {

    this.initializeApp();

    this.pages = [
      { title: 'Inicio', icon: 'md-home', component: HomePage },
      { title: 'Mis Empleados', icon: 'md-list-box', component: FindEmployeesPage }
      //{ title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.backgroundColorByHexString('#202a6b');
      this.splashScreen.hide();
      this.platform.registerBackButtonAction(() => {
    
        if (this.nav.canGoBack()) {
          this.nav.pop();
        } else {
          this.showAlert();
        }
      });
    });
  }

  openPage(page) {
   
    this.nav.setRoot(page.component);
  }

  public checkActivePage(page): boolean {
    return page === this.activePage;
  }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Salir de la Aplicación',
      message: 'Desea salir de la app?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            alert = null;
          }
        },
        {
          text: 'Salir',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present();
  }
}
