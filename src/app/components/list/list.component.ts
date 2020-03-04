import { Component, Input } from '@angular/core';

import { IHouses } from '../../models/houses';
import { ISpells } from '../../models/spells';
import { ICharacters } from '../../models/characters';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() houses: IHouses[];
  @Input() spells: ISpells[];
  @Input() characters: ICharacters[];
  @Input() searchTerm: string;
}
