import { Component, OnInit } from '@angular/core';
import {IHouses} from '../../models/houses';
import {HouseService} from '../../services/house.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public houses: IHouses[];
  public clickedItem: string;

  constructor(private http: HouseService) { }
  /*onClick(event) {
    this.clickedItem = event;
    console.log(this.clickedItem);

  }*/

  ngOnInit(): void {
   /* this.http.getHouse(this.clickedItem)
      .subscribe((data: IHouses[]) => {
        this.houses = data;
      });*/
  }

}
