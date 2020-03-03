import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHouses } from '../../models/houses';
import { ISpells } from '../../models/spells';
import { ICharacters } from '../../models/characters';
import {HouseService} from '../../services/house.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public houses: IHouses[];
  @Input() spells: ISpells[];
  @Input() characters: ICharacters[];
  @Input() searchTerm: string;
  @Output() clickedHouse = new EventEmitter<string>();
  public isHouseView = false;

  constructor(private http: HouseService) {
    this.http.getHouses()
      .subscribe((data: IHouses[]) => {
        this.houses = data;
        this.isHouseView = true;
      });
  }
   ngOnInit(): void {}


}
