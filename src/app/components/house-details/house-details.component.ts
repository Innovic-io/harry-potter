import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHouses } from '../../models/houses';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {
  @Input() house: IHouses;
  @Input() houses: IHouses[];
  @Output() clickBack = new EventEmitter<string>();

  onClickBack(event) {
    this.clickBack.emit(event);
  }

  ngOnInit(): void {
  }

}
