import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fn',
})
export class FnPipe implements PipeTransform {
  transform<F extends (...args: any) => R, R>(
    value: Parameters<F>[0],
    fn: F,
    ...args: Tail<Parameters<F>>
  ): R {
    return fn(value, args);
  }
}

type Tail<T extends any[]> = T extends [unknown, ...infer R] ? R : never;
