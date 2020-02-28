import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly apiRoot = environment.apiRoot;
  private readonly token = environment.token;
  constructor(private http: HttpClient) {}
  getCharacter() {
    return this.http.get(`${this.apiRoot}characters?key=${this.token}`);
  }
}
