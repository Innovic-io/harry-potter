import { Component, OnInit } from '@angular/core';

import { SpellService } from '../../services/spell.service';
import { ISpells } from '../../models/spells';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {
  public spellsTitle = 'Spells';
  public spells: ISpells[];
  public search: string;

  constructor(private http: SpellService) {}

  onSearch(event) {
    this.search = event;
  }

  ngOnInit(): void {
    this.http.getSpell()
      .subscribe((data: ISpells[]) => {
        this.spells = data;
      });
  }

}
