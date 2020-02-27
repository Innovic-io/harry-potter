import {Component, Input, OnInit} from '@angular/core';
import {IHouses} from '../../models/houses';
import {HouseService} from '../../services/house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public appTitle = 'Harry Potter';
  public search: string;
  public houses: IHouses[];

  onSearch(event) {
    this.search = event;
  }

  constructor(private http: HouseService) {
  }

  ngOnInit(): void {
    this.http.getHouse()
      .subscribe((data: any) => {
        this.houses = data;
      });
  }

}
