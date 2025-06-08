import { AbstractControl, ValidatorFn } from '@angular/forms';

export function noFutureDate(): ValidatorFn {
  return (control: AbstractControl) => {
    const date = new Date(control.value);
    return date > new Date() ? { futureDate: true } : null;
  };
}
