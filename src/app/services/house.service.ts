import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of } from 'rxjs';
import { houses } from '../data/houses';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private readonly apiRoot = environment.apiRoot;
  private readonly token = environment.token;

  constructor(private http: HttpClient) {}

  getHouses() {
    if (environment.offline) {
      return of(houses);
    }

    return this.http.get(`${this.apiRoot}houses?key=${this.token}`);
  }

  getHouse(houseId: string) {
    if (environment.offline) {
      return of(houses.filter(house => house._id === houseId));
    }

    return this.http.get(`${this.apiRoot}houses/${houseId}?key=${this.token}`);
  }
}
