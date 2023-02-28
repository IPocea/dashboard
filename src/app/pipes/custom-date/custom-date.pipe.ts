import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const date = value.split('-').reverse().join('/');
    return date;
  }
}
