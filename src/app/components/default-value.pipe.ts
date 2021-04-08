import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'defaultValuePipe', pure: false})
export class DefaultValuePipe implements PipeTransform {

  transform(value: string, defaultValue: string): string {
    if (!value) {
        return defaultValue;
    }
    return value !== "" ? value : defaultValue;
  }

}
