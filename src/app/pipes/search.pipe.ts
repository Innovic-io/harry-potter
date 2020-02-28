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
      const houseName = item.name.toLowerCase().includes(searchText.toLowerCase());
      const headOfHouse = item.headOfHouse.toLowerCase().includes(searchText.toLowerCase());
      const members = item.members.length;

      if (houseName) {
        return houseName;
      }
      if (headOfHouse) {
        return headOfHouse;
      }
      if (members.toString() === searchText) {
        return members;
      }
    });

  }
}
