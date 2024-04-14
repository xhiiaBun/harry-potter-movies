import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberAmilli',
  standalone: true
})
export class NumberAmilliPipe implements PipeTransform {

  transform(value: string): string{
    return `$${value} million`;
  }

}
