import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';
import { LocalStorage } from './LocalStorage';

@Injectable()
export class FirebaseProvider {
  users: FirebaseListObservable<any[]>;
  all_users = [];

  constructor(
    private db: AngularFireDatabase,
    public storage: LocalStorage) {

    this.users = db.list('/users', {
      preserveSnapshot: true
    });

    this.users.subscribe((snapshots) => {
      snapshots.forEach(snapshot => {
        this.all_users = [];

        this.all_users.push({
          key: snapshot.key,
          value: snapshot.val()
        });
      });
    });
  }

  setCredentials(obj: any) {
    const data = obj;

    this.all_users.map((item) => {
      if (item.value.id === data.id) {
        this.storage.set('firebase_info', item);
      } else {
        data.created_at = new Date().getTime();
        this.users.push(data);
      }
    })
  }

  updateCredentials(key: string, obj: any) {
    this.users.update(key, obj);
  }

  getAllUsers() {
    return this.users;
  }
}
