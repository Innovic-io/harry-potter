import {Pipe, PipeTransform} from '@angular/core';

import {ICharacters} from '../models/characters';

@Pipe({
  name: 'searchCharacters'
})
export class SearchCharactersPipe implements PipeTransform {

  transform(items: ICharacters[], searchText: string): ICharacters[] {
    if (!items || !searchText) {
      return items;
    }
    return items.filter(item => {
      const name = item.name.toLowerCase().includes(searchText.toLowerCase());
      const bloodStatus = item.bloodStatus.toLowerCase().includes(searchText.toLowerCase());

      if (item.school) {
        return item.school.toLowerCase().includes(searchText.toLowerCase());
      }
      if (name) {
        return name;
      }
      if (bloodStatus) {
        return bloodStatus;
      }
    });
  }

}
