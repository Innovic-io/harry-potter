import {Pipe, PipeTransform} from '@angular/core';
import {IHouses} from '../models/houses';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: IHouses[], searchText: string): IHouses[] {
    console.log(items, searchText);
    if (!items || !searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText);
    });
  }

}
