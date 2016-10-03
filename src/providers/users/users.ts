import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable()

export class Users {

  private usersUrl = 'assets/users.json';

  constructor(private http:Http) {

  }

  /**
   * Récupération via ajax du fichier json.
   *
   * @returns {Observable<R>}
     */
  getUsers(): Observable<any[]> {
    return this.http.get(this.usersUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Extraction des données.
   *
   * @param res
   * @returns {any|{}}
     */
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  /**
   * Gestion des erreurs.
   *
   * @param error
   * @returns {ErrorObservable}
     */
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

