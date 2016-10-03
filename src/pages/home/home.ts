import {Component} from '@angular/core';
import {PopoverController, ActionSheetController, NavController} from 'ionic-angular';
import {MyPopover} from '../../pages/popover/popover';
import {LoginPage} from '../../pages/login/login';
import {HistoryPage} from '../../pages/history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor
  (public popoverCtrl:PopoverController,
   public actionSheetCtrl:ActionSheetController,
   public nav:NavController) {

    console.log('home page');
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
            console.log('MAJ catalogue');
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
            localStorage.setItem('username', '');
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
