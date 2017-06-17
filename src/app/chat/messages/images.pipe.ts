import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return JSON.parse(value);
  }

}
