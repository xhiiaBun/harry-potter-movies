import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timetoHrmin',
  standalone: true
})
export class TimetoHrminPipe implements PipeTransform {

  transform(value: string): string {
    let duration = Number(value);
    let hr = ~~(duration/60);
    let mins = duration%60;
    return `${hr}h ${mins}min`;
  }

}
