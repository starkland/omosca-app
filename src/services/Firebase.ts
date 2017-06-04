import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {
  users: FirebaseListObservable<any[]>;

  constructor(
    private db: AngularFireDatabase) {

    this.users = db.list('/users');
  }

  setCredentials(obj: any) {
    const data = obj;
    data.created_at = new Date().getTime();

    this.users.push(data);
  }
}
