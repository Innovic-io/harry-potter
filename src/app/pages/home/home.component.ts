import { Component, OnInit } from '@angular/core';

import {IHouses} from '../../models/houses';
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
  public house: IHouses;
  public isHouseView = false;

  onSearch(event) {
    this.search = event;
  }
  onClickBack(event) {
    this.isHouseView = event;
  }

  onClickHouse(houseID) {
    this.http.getHouse(houseID)
      .subscribe((data: [IHouses]) => {
        this.house = data[0];
        this.isHouseView = true;
      });
  }

  constructor(private http: HouseService) {}

  ngOnInit(): void {
    this.http.getHouses()
      .subscribe((data: IHouses[]) => {
        this.houses = data;
      });
  }
}
