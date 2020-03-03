import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHouses } from '../../models/houses';
import {HouseService} from '../../services/house.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {
  house: IHouses;
  houses: IHouses[];
  @Output() clickBack = new EventEmitter<string>();
  onClickBack(event) {
    this.clickBack = event;
  }

  constructor(private http: HouseService, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe((data) => {
      console.log('data: ', data);
      this.http.getHouse(data.id)
        .subscribe((house: [IHouses]) => {
          this.house = house[0];
        });
    });
  }
  ngOnInit(): void {
  }

}
