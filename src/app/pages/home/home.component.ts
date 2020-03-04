import { Component, OnInit } from '@angular/core';

import { IHouses } from '../../models/houses';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public appTitle = 'Houses';
  public search: string;
  public houses: IHouses[];

  constructor(private http: HouseService) {}

  onSearch(event) {
    this.search = event;
  }

  ngOnInit(): void {
    this.http.getHouses()
      .subscribe((data: IHouses[]) => {
        this.houses = data;
      });
  }
}
