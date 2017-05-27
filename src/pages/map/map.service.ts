import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MapService {
  private markerUrl = 'https://form-location-jsday-recife.firebaseio.com/veggies.json';

  constructor(private http: Http) {}

  getMarkers(): Promise<any> {
    return this.http
      .get(this.markerUrl)
      .toPromise()
      .then(this._handleMarkers);
  }

  _handleMarkers(res: Response) {
    const data = res.json();

    return data || { };
  }
}
