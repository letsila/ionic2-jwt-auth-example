import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Response, Http} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable()

export class Users {

  // private connexionUrl = 'http://lomaytech.com/shifteo/connexion';
  // private sendDataUrl = 'http://lomaytech.com/shifteo/send';
  //
  private connexionUrl = 'http://localhost:8000/shifteo/connexion';
  private sendDataUrl = 'http://localhost:8000/shifteo/send';

  constructor(
    public http:Http,
    public authHttp:AuthHttp,
  ) {
  }

  /**
   * Connexion depuis le serveur.
   *
   * @param user_login
   * @param user_password
   * @returns {Observable<Response>}
   */
  getUser(user_login, user_password):Observable<any> {
    return this.http.get(`${this.connexionUrl}/${user_login}/${user_password}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Envoie sécurisée de données vers le serveur en utilisant JWT.
   *
   * @returns {Observable<Response>}
   */
  sendUserData():any {
    return this.authHttp.get(this.sendDataUrl);
  }

  /**
   * Extraction des données.
   *
   * @param res
   * @returns {any|{}}
   */
  private extractData(res:Response) {
    let body = res.json();
    return body || {};
  }

  /**
   * Gestion des erreurs.
   *
   * @param error
   * @returns {ErrorObservable}
   */
  private handleError(error:any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

