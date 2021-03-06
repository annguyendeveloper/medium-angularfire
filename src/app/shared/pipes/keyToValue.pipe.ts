/**
 * converting 'work_out' to 'Work Out'
 *
 * obj: any = [
 {
   type: 'work_out',
   name: 'Work Out'
 }
 ];

 * {{'work' | keyToValue:obj:'type':'name'}}
 *
 */
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'keyToValue'
})
export class KeyToValuePipe implements PipeTransform {

  transform(key: any, obj: any, objKey: any, objValue: any): any {
    const newObj: any = _.find(obj, [objKey, key]);
    if (newObj && newObj[objValue]) {
      return newObj[objValue];
    }
    return '';
  }
}
