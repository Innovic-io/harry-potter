import {Component, Input, OnInit} from '@angular/core';
import {IHouses} from '../../models/houses';
import {HouseService} from '../../services/house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public appTitle = 'Houses';
  public search: string;
  public houses: IHouses[];
  public clickedItem: string;

  onSearch(event) {
    this.search = event;
  }

  onClick(event) {
    this.clickedItem = event;
    console.log(this.clickedItem);
  }

  constructor(private http: HouseService) {
  }

  ngOnInit(): void {
    this.http.getHouses()
      .subscribe((data: IHouses[]) => {
        this.houses = data;
      });
  }

}
