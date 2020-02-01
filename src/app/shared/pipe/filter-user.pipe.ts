import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../dashboard/model/twitter.model';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value && args && args[0]){
      const users : User[] = value;
      const filterIds:string[] = args[0];
      return users.filter((user : User) => filterIds.includes(user.id_str))
    }
    return null;
  }

}
