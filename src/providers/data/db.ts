import {Injectable} from '@angular/core';

// Déclaration nécessaire pour rendre la librairie PouchDb
// lisible par typeScript.
declare var PouchDB:any;

@Injectable()

export class Db {
  db:any;

  constructor() {
    this.db = new PouchDB('shifteo', {adapter: 'websql'});
  }

  /**
   * Mapping du get de notre pouchDb pour la rendre accessible depuis
   * le provider.
   *
   * @param id
   * @returns {any}
     */
  get(id) {
    return this.db.get(id);
  }

  /**
   * Mapping du put de notre pouchDb pour la rendre accessible depuis
   * le provider.
   *
   * @param obj
   * @returns {any|Observable<Response>|IDBRequest|Observable<T>}
     */
  put(obj) {
    return this.db.put(obj);
  }

  /**
   * Mapping du remove de notre pouchDb pour la rendre accessible depuis
   * le provider.
   *
   * @param id
   * @returns {any}
     */
  remove(id) {
    return this.db.remove(id);
  }
}
