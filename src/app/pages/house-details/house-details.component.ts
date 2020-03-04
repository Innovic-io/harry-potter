import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IHouses } from '../../models/houses';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {
  house: IHouses;

  constructor(private http: HouseService, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {

    const { id } = this.activateRoute.snapshot.params;

    this.http.getHouse(id)
      .subscribe((house: [IHouses]) => {
        this.house = house[0];
      });
  }

}
