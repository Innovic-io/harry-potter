import { Pipe, PipeTransform } from '@angular/core';
import { ISpells } from '../models/spells';

@Pipe({
  name: 'searchSpells'
})
export class SearchSpellsPipe implements PipeTransform {

  transform(items: ISpells[], searchText: string): ISpells[] {
    console.log(searchText);
    if (!items || !searchText) {
      return items;
    }
    return items.filter(item => {
      const spell = item.spell.toLowerCase().includes(searchText.toLowerCase());
      const type = item.type.toLowerCase().includes(searchText.toLowerCase());
      const effect = item.effect.toLowerCase().includes(searchText.toLowerCase());

      if (spell) {
        return spell;
      }
      if (type) {
        return type;
      }
      if (effect) {
        return effect;
      }
    });
  }

}
