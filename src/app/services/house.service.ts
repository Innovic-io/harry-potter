import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private readonly apiRoot = environment.apiRoot;
  private readonly token = environment.token;

  constructor(private http: HttpClient) {
  }

  getHouses() {
    if (environment.offline) {
      // TODO return all houses from local file
      return of([]);
    }

    return this.http.get(`${this.apiRoot}houses?key=${this.token}`);
  }

  getHouse(houseId: string) {
    return this.http.get(`${this.apiRoot}houses/${houseId}?key=${this.token}`);
  }
}
