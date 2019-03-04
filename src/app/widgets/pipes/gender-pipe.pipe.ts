import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe'
})
export class GenderPipePipe implements PipeTransform {
  transform(genderNum: number): string {
    return genderNum === 0 ? 'Female' : 'Male';
  }
}
