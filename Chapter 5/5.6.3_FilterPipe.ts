import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter', standalone: true, pure: true })
export class FilterPipe implements PipeTransform {
  transform<T>(items: T[], predicate: (item: T) => boolean): T[] {
    return items.filter(predicate);
  }
}