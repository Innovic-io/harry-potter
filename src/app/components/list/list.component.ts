import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHouses} from '../../models/houses';
import {ISpells} from '../../models/spells';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() houses: IHouses[];
  @Input() spells: ISpells[];
  @Input() searchTerm: string;
  @Output() clickedHouse = new EventEmitter<string>();

  constructor() { }
   ngOnInit(): void {
  }
  onClick(event) {
    this.clickedHouse.emit(event);
  }

}
