import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Response, Http, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable()

export class Users {

  private baseUrl = 'http://0.0.0.0:8080';

  constructor(public http:Http,
              public authHttp:AuthHttp,) {
  }

  /**
   * Authentication request to the server.
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

    return this.http.post(`${this.baseUrl}/authenticate`, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Sending secure request to the server via the JWT.
   *
   * @returns {Observable<Response>}
   */
  getSecuredData():any {
    let jwt = localStorage.getItem('id_token');
    let authHeader = new Headers();

    if (jwt) {
      authHeader.append('Authorization', jwt);
    }

    let options = new RequestOptions({headers: authHeader});

    return this.http.get(`${this.baseUrl}/restricted`, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Extracting data.
   *
   * @param res
   * @returns {any|{}}
   */
  private extractData(res:Response) {
    let body = res.json();
    return body || {};
  }

  /**
   * Handling errors.
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

