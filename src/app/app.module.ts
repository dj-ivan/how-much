import { AddExpenseModal } from './../pages/modals/add-expense-modal/add-expense-modal';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HowMuch } from '../pages/how-much/how-much';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CacheService } from '../services/cache-service';
import { StoreService } from '../services/store-service';
import { OverviewPage } from '../pages/overview/overview';
import { BudgetService } from '../services/budget-service';
import { BrMaskerIonic3 } from '../directives/input-mask';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HowMuch,
    OverviewPage,
    AddExpenseModal,
    BrMaskerIonic3
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HowMuch,
    OverviewPage,
    AddExpenseModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CacheService,
    BudgetService,
    StoreService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
