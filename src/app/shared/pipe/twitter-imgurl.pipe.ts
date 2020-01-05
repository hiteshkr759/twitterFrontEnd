import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twitterIMGUrl'
})
export class TwitterIMGUrlPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.replace('_normal','');
  }

}
