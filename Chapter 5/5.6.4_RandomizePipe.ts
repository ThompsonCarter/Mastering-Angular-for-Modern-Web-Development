import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'randomize', standalone: true, pure: false })
export class RandomizePipe implements PipeTransform {
  transform<T>(items: T[]): T[] {
    return items.sort(() => Math.random() - 0.5);
  }
}