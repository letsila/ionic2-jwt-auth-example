import {Component} from '@angular/core';
import {PopoverController, ActionSheetController, NavController} from 'ionic-angular';
import {LoginPage} from '../../pages/login/login';
import {Users} from '../../providers/users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Users]
})

export class HomePage {
  public user_login: string;

  constructor
  (public popoverCtrl:PopoverController,
   public actionSheetCtrl:ActionSheetController,
   public nav:NavController,
   public users:Users) {

    this.user_login = localStorage.getItem('user_login');
  }

  presentActionSheet():void {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: 'Get secured content',
          role: 'destructive',
          handler: () => {
            this.users.getSecuredData().subscribe(response => {
              console.log(response);
            })
          }
        },
        {
          text: 'Log out',
          handler: () => {
            localStorage.setItem('id_token', '');
            this.nav.push(LoginPage);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


}
