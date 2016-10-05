import {Component} from '@angular/core';
import {PopoverController, ActionSheetController, NavController} from 'ionic-angular';
import {MyPopover} from '../../pages/popover/popover';
import {LoginPage} from '../../pages/login/login';
import {HistoryPage} from '../../pages/history/history';
import {Users} from '../../providers/users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Users]
})

export class HomePage {
  constructor
  (public popoverCtrl:PopoverController,
   public actionSheetCtrl:ActionSheetController,
   public nav:NavController,
   public users:Users) {
  }

  presentPopover():void {
    let popover = this.popoverCtrl.create(MyPopover);
    popover.present();
  }

  goToHistory():void {
    this.nav.push(HistoryPage);
  }

  presentActionSheet():void {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: 'MAJ Catalogue Produits',
          role: 'destructive',
          handler: () => {
            this.users.sendUserData().then(response => {
              console.log(response);
            })
          }
        },
        {
          text: 'Paramètres du téléphone',
          handler: () => {
            console.log('Paramètres du téléphone');
          }
        },
        {
          text: 'Déconnectez vous',
          handler: () => {
            localStorage.setItem('user_login', '');
            this.nav.push(LoginPage);
          }
        }, {
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
