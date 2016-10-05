import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {FdcPage} from '../pages/fdc/fdc';
import {HistoryPage} from '../pages/history/history';
import {LoginPage} from '../pages/login/login';
import {MyPopover} from '../pages/popover/popover';
import {Db} from '../providers/data/db';
import {Users} from '../providers/users/users';
import {provideAuth} from 'angular2-jwt';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FdcPage,
    HistoryPage,
    LoginPage,
    MyPopover
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FdcPage,
    HistoryPage,
    LoginPage,
    MyPopover
  ],
  providers: [
    Db,
    Users,
    provideAuth({
      headerName: 'Authorization',
      headerPrefix: 'bearer',
      tokenName: 'token',
      tokenGetter: (() => localStorage.getItem('id_token')),
      globalHeaders: [{ 'Content-Type': 'application/json' }],
      noJwtError: true
    }),
  ]
})
export class AppModule {
}
