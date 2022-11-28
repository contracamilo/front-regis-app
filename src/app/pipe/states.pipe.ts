import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'states'
})
export class StatesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
