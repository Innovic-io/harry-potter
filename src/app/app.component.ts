import { Component } from '@angular/core';
import { AppRouting } from './models/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public page = AppRouting.houses;

  /*onClick(event) {
    this.page = event;
    console.log(event);
  }*/

}
