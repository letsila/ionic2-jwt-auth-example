import {Component} from '@angular/core';
import {NavParams, NavController} from 'ionic-angular';
import {Db} from '../../providers/data/db';
import {HomePage} from '../../pages/home/home';

@Component({
  providers: [Db],
  templateUrl: 'fdc.html'
})

export class FdcPage {

  session:string;

  constructor
  (public db:Db,
   public navParams:NavParams,
   public nav:NavController) {

    this.session = navParams.get('session');
  }

  deleteSession() {

    this.db.get(this.session).then((sess) => {
      this.db.remove(sess).then(() => {
        this.nav.push(HomePage);

      }).catch((e) => {
        console.log(e);
        console.log('erreur');
      });
    });

  }
}
