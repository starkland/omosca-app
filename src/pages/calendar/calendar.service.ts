import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CalendarService {
  private markerUrl = 'https://omosca-app.firebaseio.com/pre_events.json';

  constructor(private http: Http) {}

  getEvents(): Promise<any> {
    return this.http
      .get(this.markerUrl)
      .toPromise()
      .then(this._handleEvents)
      .catch(this._handleError);
  }

  _handleEvents(res: Response) {
    const data = res.json();

    return data || { };
  }

  _handleError(err: any) {
    const error = err.json();

    if (error) {
      throw new error;
    }
  }
}
