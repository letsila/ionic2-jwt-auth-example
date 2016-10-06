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
    let loading = this.loadingCtrl.create({
      content: 'Chargement ...'
    });

    loading.present();

    // Connexion serveur.
    this.users.getUser(user_login, user_password).subscribe(token => {
      loading.dismiss();

      // Si on retrouve un utilisateur qui concorde on renvoie vers la page d'accueil.
      // sinon on affiche un message d'alerte.
      if (token && token != 'undefined') {
        localStorage.setItem('id_token', token.token);
        localStorage.setItem('user_login', user_login);
        this.goToHomePage();

      } else {
        let alert = this.alertCtrl.create({
          title: 'Erreur!',
          subTitle: 'La connexion a échoué. Vérifiez vos identifiants et recommencez.',
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }
}
