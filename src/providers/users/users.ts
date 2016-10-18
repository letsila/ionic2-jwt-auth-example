import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Response, Http, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable()

export class Users {

  private connexionUrl = 'http://0.0.0.0:8080/connexion';
  private sendDataUrl = 'http://0.0.0.0:8080/send';

  constructor(public http:Http,
              public authHttp:AuthHttp,) {
  }

  /**
   * Connexion depuis le serveur.
   *
   * @param user_login
   * @param user_password
   * @returns {Observable<Response>}
   */
  getUser(user_login, user_password):Observable<any> {
    let body = "user_login=" + user_login + "&user_password=" + user_password;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({headers: headers});

    return this.http.post(`${this.connexionUrl}`, body, options)
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

