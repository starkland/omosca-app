import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class LoginService {
  users: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.users = db.list('/users');
  }

  setCredentials(obj: any) {
    this.users.push(obj);
  }
}

