import {Component} from '@angular/core';
import {Users} from '../../providers/users/users';
import {NavController, AlertController} from 'ionic-angular';
import {HomePage} from '../../pages/home/home';

@Component({
  providers: [Users],
  templateUrl: 'login.html'
})
export class LoginPage {
  username:string;
  password:string;

  userList:any[];

  constructor
  (private users:Users,
   public nav:NavController,
   public alertCtrl:AlertController) {

    // Souscription à notre Observable.
    users.getUsers().subscribe(users => {
      this.userList = users;
    });
  }

  goToHomePage() {
    this.nav.push(HomePage);
  }

  login(username, password) {

    // On vérifie si on a bien notre liste d'utilisateur sinon on relance la
    // requête.
    if (this.userList.length > 0) {

      // On recherche l'utilisateur dans notre liste d'utilisateur.
      let theUser = this.userList.filter((user) => {
        return user.user_login == username && user.user_pwd == password;
      });

      // Si on retrouve un utilisateur qui concorde on renvoie vers la page d'accueil.
      // sinon on affiche un message d'alerte.
      if (theUser.length == 1) {
        localStorage.setItem('username', theUser[0].user_login);
        this.goToHomePage();

      } else {
        let alert = this.alertCtrl.create({
          title: 'Erreur!',
          subTitle: 'La connexion a échoué. Vérifiez vos identifiants et recommencez.',
          buttons: ['OK']
        });
        alert.present();
      }
    } else {
      this.users.getUsers()
    }
  }
}
