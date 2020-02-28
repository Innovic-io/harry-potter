import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private readonly apiRoot = environment.apiRoot;
  private readonly token = environment.token;
  constructor(private http: HttpClient) {}
  getSpell() {
    return this.http.get(`${this.apiRoot}spells?key=${this.token}`);
  }
}



