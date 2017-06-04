import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorage {
  constructor() {}

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  remove(key) {
    localStorage.removeItem(key);
  }
}

