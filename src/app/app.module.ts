import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EmployeesServiceProvider } from '../providers/employees-service/employees-service';
import { FindEmployeesPage } from '../pages/find-employees/find-employees';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { DetailEmployeePage } from '../pages/detail-employee/detail-employee';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FindEmployeesPage,
    DetailEmployeePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FindEmployeesPage,
    DetailEmployeePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmployeesServiceProvider
  ]
})
export class AppModule {}
