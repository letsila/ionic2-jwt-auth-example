import {Component} from '@angular/core';
import {Users} from '../../providers/users/users';
import {NavController, AlertController, LoadingController} from 'ionic-angular';
import {HomePage} from '../../pages/home/home';

@Component({
  providers: [Users],
  templateUrl: 'login.html'
})
export class LoginPage {
  user_login:string;
  user_password:string;

  constructor
  (private users:Users,
   public nav:NavController,
   public alertCtrl:AlertController,
   public loadingCtrl:LoadingController
  ) {
  }

  goToHomePage() {
    this.nav.push(HomePage);
  }

  login(user_login, user_password) {

    if (user_login == '' || user_password == '')
    {
      this.alertConnexionError();
      return;
    }

    let loading = this.loadingCtrl.create({
      content: 'Loading ...'
    });

    loading.present();

    // Server authentication.
    this.users.getUser(user_login, user_password).subscribe(token => {
      loading.dismiss();

      // If the user credentials are valid, the current user is redirected to the home page.
      if (token && token != 'undefined' && token != 'No user found') {
        localStorage.setItem('id_token', token.token);
        localStorage.setItem('user_login', user_login);
        this.goToHomePage();

      } else {
        this.alertConnexionError();
      }
    });
  }

  alertConnexionError() {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'Connection refused. Check your login/password.',
      buttons: ['OK']
    });
    alert.present();
  }
}
