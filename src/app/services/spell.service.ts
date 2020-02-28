import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(private http: HttpClient) {
  }

  getSpell() {
    return this.http.get('https://www.potterapi.com/v1/spells?key=$2a$10$uO8ooOUh7hPLnBF/HVyPgOHA3FptZxvqGr916lQl9L8RMWVWYOA3O');
  }
}



