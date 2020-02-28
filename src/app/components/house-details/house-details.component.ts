import { Component, Input, OnInit } from '@angular/core';
import { IHouses } from '../../models/houses';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {
  @Input() house: IHouses;
  @Input() houses: IHouses[];

  ngOnInit(): void {
  }

}
