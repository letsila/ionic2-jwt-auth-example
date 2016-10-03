import {Component} from '@angular/core';
import {Db} from '../../providers/data/db';
import {NavController, AlertController} from 'ionic-angular';
import {FdcPage} from '../../pages/fdc/fdc';

@Component({
  providers: [Db],
  templateUrl: 'popover.html'
})

export class MyPopover {

  // Déclaration des variables d'instance pour le data binding
  // au niveau des champs de formulaire du template.
  numero:any;
  pays:string;

  constructor
  (public db:Db,
   public nav:NavController,
   public alertCtrl:AlertController) {
  }

  createSession(numero, pays) {
    // Création d'un id pour la nouvelle session.
    let newSessionId:string = 'sess' + String(numero) + Date.now();

    let obj = {
      _id: newSessionId,
      pays: pays
    };

    // Enregistrement de la nouvelle session dans la base pouchdb.
    this.db.put(obj).then((res) => {
      this.nav.push(FdcPage, {
        session: res.id
      });
    }).catch((e) => {
      console.log(e);
      console.log('erreur !');
    });
  }
}
