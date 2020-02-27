import {Pipe, PipeTransform} from '@angular/core';
import {IHouses} from '../models/houses';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: IHouses[], searchText: string): IHouses[] {
    if (!items || !searchText) {
      return items;
    }

    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
