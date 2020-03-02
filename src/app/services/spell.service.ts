import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { spells } from '../data/spells';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private readonly apiRoot = environment.apiRoot;
  private readonly token = environment.token;

  constructor(private http: HttpClient) {}

  getSpell() {
    if (environment.offline) {
      return of(spells);
    }

    return this.http.get(`${this.apiRoot}spells?key=${this.token}`);
  }
}



