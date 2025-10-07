import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/user.model';

@Pipe({
  name: 'sortorder'
})
export class SortorderPipe implements PipeTransform {

  transform(value:User[] | null) {
    let sortedArray: User[]  = [];
    if(value) {
      let temp: User[] = value;
      sortedArray = temp.sort((a:User, b:User) => {
      let nameA = a.username.toLowerCase();
      let nameB = b.username.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
      })
        }
        return sortedArray;
    }
}

