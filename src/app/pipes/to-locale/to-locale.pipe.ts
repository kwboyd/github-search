import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLocale'
})
export class ToLocalePipe implements PipeTransform {
  // adds local formatting to numbers. (comma in USA)

  transform(value: number): string {
    return value.toLocaleString();
  }

}
